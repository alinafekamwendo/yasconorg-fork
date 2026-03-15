import { NextRequest, NextResponse } from "next/server";
import { getPrismaClient, ensureCmsSchema } from "@/lib/cms/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await ensureCmsSchema();
    const client = getPrismaClient();
    const { slug } = params;

    const news = await client.cmsNews.findFirst({
      where: { slug },
      include: {
        createdBy: {
          select: { name: true },
        },
      },
    });

    if (!news || news.status !== "published") {
      return NextResponse.json(
        { error: "News not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(news);
  } catch (error) {
    console.error("Single news fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
