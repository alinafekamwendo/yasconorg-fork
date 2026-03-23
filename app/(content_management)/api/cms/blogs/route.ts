import { NextRequest, NextResponse } from "next/server";
import { ensureCmsSchema } from "@/lib/cms/db";
import { getSessionUserFromRequest } from "@/lib/cms/auth";
import { canCreateOrEditContent } from "@/lib/cms/permissions";
import { getBlogs, createBlog } from "@/lib/cms/service";
import { generateSlug } from "@/lib/cms/utils";
import type { ContentRegion, ContentStatus } from "@/lib/cms/service";

export async function GET(req: NextRequest) {
  try {
    await ensureCmsSchema();
    const { searchParams } = new URL(req.url);
    const region = searchParams.get("region") as ContentRegion | null;
    const status = (searchParams.get("status") || "published") as ContentStatus | "all";
    const limit = Number(searchParams.get("limit")) || 50;
    const items = await getBlogs({ region: region ?? undefined, status, limit });
    return NextResponse.json(items, {
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" },
    });
  } catch (error) {
    console.error("blogs GET error:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await ensureCmsSchema();
    const user = await getSessionUserFromRequest(req);
    if (!user || !canCreateOrEditContent(user)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const body = await req.json();
    if (!body.title || !body.excerpt || !body.richContent || !body.region)
      return NextResponse.json({ error: "title, excerpt, richContent, region are required" }, { status: 400 });
    const slug = generateSlug(body.title);
    const item = await createBlog({
      title: body.title, slug, excerpt: body.excerpt,
      richContent: body.richContent,
      coverImage: typeof body.coverImage === "string" ? body.coverImage : (body.coverImage?.url ?? null),
      region: body.region, status: body.status ?? "draft",
      createdById: user.id,
    });
    return NextResponse.json(item, { status: 201 });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Failed to create blogs";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
