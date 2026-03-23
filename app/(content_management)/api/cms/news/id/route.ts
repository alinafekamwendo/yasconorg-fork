import { NextRequest, NextResponse } from "next/server";
import { ensureCmsSchema } from "@/lib/cms/db";
import { getSessionUserFromRequest } from "@/lib/cms/auth";
import { canCreateOrEditContent } from "@/lib/cms/permissions";
import { getNewsById, updateNews, deleteNews } from "@/lib/cms/service";
import type { ContentRegion, ContentStatus } from "@/lib/cms/service";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Ctx) {
  try {
    await ensureCmsSchema();
    const id = Number((await params).id);
    if (!id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    const item = await getNewsById(id);
    if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(item);
  } catch { return NextResponse.json({ error: "Server error" }, { status: 500 }); }
}

export async function PATCH(req: NextRequest, { params }: Ctx) {
  try {
    await ensureCmsSchema();
    const user = await getSessionUserFromRequest(req);
    if (!user || !canCreateOrEditContent(user)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const id = Number((await params).id);
    if (!id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    const body = await req.json();
    const item = await updateNews(id, {
      ...(body.title && { title: body.title }),
      ...(body.excerpt && { excerpt: body.excerpt }),
      ...(body.richContent !== undefined && { richContent: body.richContent }),
      ...(body.coverImage !== undefined && { coverImage: typeof body.coverImage === "string" ? body.coverImage : (body.coverImage?.url ?? null) }),
      ...(body.region && { region: body.region as ContentRegion }),
      ...(body.status && { status: body.status as ContentStatus }),
    }, user.id);
    return NextResponse.json(item);
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Failed to update";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Ctx) {
  try {
    await ensureCmsSchema();
    const user = await getSessionUserFromRequest(_req);
    if (!user || !canCreateOrEditContent(user)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const id = Number((await params).id);
    if (!id) return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    await deleteNews(id);
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Failed to delete" }, { status: 500 }); }
}
