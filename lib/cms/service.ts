
import { getPrismaClient } from "./db";

// ─── Types ─────────────────────────────────────────────────────────────────
export type ContentStatus = "draft" | "published" | "archived";
export type ContentRegion = "national" | "northern" | "central" | "southern" | "eastern";

export interface ListOptions {
  region?: ContentRegion | "all";
  status?: ContentStatus | "all";
  limit?: number;
  skip?: number;
}

// ─── News ──────────────────────────────────────────────────────────────────
export async function getNews(opts: ListOptions = {}) {
  const prisma = getPrismaClient();
  const where: Record<string, unknown> = {};
  if (opts.region && opts.region !== "all") where.region = opts.region;
  where.status = opts.status && opts.status !== "all" ? opts.status : "published";

  return prisma.cmsNews.findMany({
    where,
    include: { createdBy: { select: { id: true, name: true } } },
    orderBy: { publishedAt: "desc" },
    take: opts.limit ?? 50,
    skip: opts.skip ?? 0,
  });
}

export async function getNewsBySlug(slug: string) {
  const prisma = getPrismaClient();
  return prisma.cmsNews.findFirst({
    where: { slug, status: "published" },
    include: { createdBy: { select: { name: true } } },
  });
}

export async function getNewsById(id: number) {
  const prisma = getPrismaClient();
  return prisma.cmsNews.findUnique({
    where: { id },
    include: { createdBy: { select: { name: true } } },
  });
}

export async function createNews(data: {
  title: string; slug: string; excerpt: string; richContent: string;
  coverImage?: string | null; region: ContentRegion; status: ContentStatus;
  createdById: number;
}) {
  const prisma = getPrismaClient();
  return prisma.cmsNews.create({
    data: {
      ...data,
      publishedAt: data.status === "published" ? new Date() : null,
      updatedById: data.createdById,
    },
  });
}

export async function updateNews(id: number, data: Partial<{
  title: string; slug: string; excerpt: string; richContent: string;
  coverImage: string | null; region: ContentRegion; status: ContentStatus;
}>, updatedById: number) {
  const prisma = getPrismaClient();
  const existing = await prisma.cmsNews.findUnique({ where: { id } });
  const wasPublished = existing?.status !== "published" && data.status === "published";
  return prisma.cmsNews.update({
    where: { id },
    data: {
      ...data,
      updatedById,
      ...(wasPublished ? { publishedAt: new Date() } : {}),
      updatedAt: new Date(),
    },
  });
}

export async function deleteNews(id: number) {
  const prisma = getPrismaClient();
  await prisma.cmsNews.delete({ where: { id } });
}

// ─── Announcements ─────────────────────────────────────────────────────────
export async function getAnnouncements(opts: ListOptions = {}) {
  const prisma = getPrismaClient();
  const where: Record<string, unknown> = {};
  if (opts.region && opts.region !== "all") where.region = opts.region;
  where.status = opts.status && opts.status !== "all" ? opts.status : "published";

  return prisma.cmsAnnouncement.findMany({
    where,
    include: { createdBy: { select: { id: true, name: true } } },
    orderBy: { publishedAt: "desc" },
    take: opts.limit ?? 50,
    skip: opts.skip ?? 0,
  });
}

export async function getAnnouncementById(id: number) {
  const prisma = getPrismaClient();
  return prisma.cmsAnnouncement.findUnique({
    where: { id },
    include: { createdBy: { select: { name: true } } },
  });
}

export async function createAnnouncement(data: {
  title: string; slug: string; excerpt: string; richContent: string;
  coverImage?: string | null; region: ContentRegion; status: ContentStatus;
  createdById: number;
}) {
  const prisma = getPrismaClient();
  return prisma.cmsAnnouncement.create({
    data: {
      ...data,
      publishedAt: data.status === "published" ? new Date() : null,
      updatedById: data.createdById,
    },
  });
}

export async function updateAnnouncement(id: number, data: Partial<{
  title: string; slug: string; excerpt: string; richContent: string;
  coverImage: string | null; region: ContentRegion; status: ContentStatus;
}>, updatedById: number) {
  const prisma = getPrismaClient();
  const existing = await prisma.cmsAnnouncement.findUnique({ where: { id } });
  const wasPublished = existing?.status !== "published" && data.status === "published";
  return prisma.cmsAnnouncement.update({
    where: { id },
    data: {
      ...data,
      updatedById,
      ...(wasPublished ? { publishedAt: new Date() } : {}),
      updatedAt: new Date(),
    },
  });
}

export async function deleteAnnouncement(id: number) {
  const prisma = getPrismaClient();
  await prisma.cmsAnnouncement.delete({ where: { id } });
}

// ─── Blogs ─────────────────────────────────────────────────────────────────
export async function getBlogs(opts: ListOptions = {}) {
  const prisma = getPrismaClient();
  const where: Record<string, unknown> = {};
  if (opts.region && opts.region !== "all") where.region = opts.region;
  where.status = opts.status && opts.status !== "all" ? opts.status : "published";

  return prisma.cmsBlog.findMany({
    where,
    include: { createdBy: { select: { id: true, name: true } } },
    orderBy: { publishedAt: "desc" },
    take: opts.limit ?? 50,
    skip: opts.skip ?? 0,
  });
}

export async function getBlogById(id: number) {
  const prisma = getPrismaClient();
  return prisma.cmsBlog.findUnique({
    where: { id },
    include: { createdBy: { select: { name: true } } },
  });
}

export async function getBlogBySlug(slug: string) {
  const prisma = getPrismaClient();
  return prisma.cmsBlog.findFirst({
    where: { slug, status: "published" },
    include: { createdBy: { select: { name: true } } },
  });
}

export async function createBlog(data: {
  title: string; slug: string; excerpt: string; richContent: string;
  coverImage?: string | null; region: ContentRegion; status: ContentStatus;
  createdById: number;
}) {
  const prisma = getPrismaClient();
  return prisma.cmsBlog.create({
    data: {
      ...data,
      publishedAt: data.status === "published" ? new Date() : null,
      updatedById: data.createdById,
    },
  });
}

export async function updateBlog(id: number, data: Partial<{
  title: string; slug: string; excerpt: string; richContent: string;
  coverImage: string | null; region: ContentRegion; status: ContentStatus;
}>, updatedById: number) {
  const prisma = getPrismaClient();
  const existing = await prisma.cmsBlog.findUnique({ where: { id } });
  const wasPublished = existing?.status !== "published" && data.status === "published";
  return prisma.cmsBlog.update({
    where: { id },
    data: {
      ...data,
      updatedById,
      ...(wasPublished ? { publishedAt: new Date() } : {}),
      updatedAt: new Date(),
    },
  });
}

export async function deleteBlog(id: number) {
  const prisma = getPrismaClient();
  await prisma.cmsBlog.delete({ where: { id } });
}

// ─── Press Briefings ───────────────────────────────────────────────────────
export async function getPressBriefings(opts: ListOptions = {}) {
  const prisma = getPrismaClient();
  const where: Record<string, unknown> = {};
  if (opts.region && opts.region !== "all") where.region = opts.region;
  where.status = opts.status && opts.status !== "all" ? opts.status : "published";

  return prisma.cmsPressBreifing.findMany({
    where,
    include: { createdBy: { select: { id: true, name: true } } },
    orderBy: { publishedAt: "desc" },
    take: opts.limit ?? 50,
    skip: opts.skip ?? 0,
  });
}

export async function getPressBriefingById(id: number) {
  const prisma = getPrismaClient();
  return prisma.cmsPressBreifing.findUnique({
    where: { id },
    include: { createdBy: { select: { name: true } } },
  });
}

export async function createPressBriefing(data: {
  title: string; slug: string; excerpt: string; richContent: string;
  coverImage?: string | null; region: ContentRegion; status: ContentStatus;
  createdById: number;
}) {
  const prisma = getPrismaClient();
  return prisma.cmsPressBreifing.create({
    data: {
      ...data,
      publishedAt: data.status === "published" ? new Date() : null,
      updatedById: data.createdById,
    },
  });
}

export async function updatePressBriefing(id: number, data: Partial<{
  title: string; slug: string; excerpt: string; richContent: string;
  coverImage: string | null; region: ContentRegion; status: ContentStatus;
}>, updatedById: number) {
  const prisma = getPrismaClient();
  const existing = await prisma.cmsPressBreifing.findUnique({ where: { id } });
  const wasPublished = existing?.status !== "published" && data.status === "published";
  return prisma.cmsPressBreifing.update({
    where: { id },
    data: {
      ...data,
      updatedById,
      ...(wasPublished ? { publishedAt: new Date() } : {}),
      updatedAt: new Date(),
    },
  });
}

export async function deletePressBriefing(id: number) {
  const prisma = getPrismaClient();
  await prisma.cmsPressBreifing.delete({ where: { id } });
}

// ─── Videos ────────────────────────────────────────────────────────────────
export async function getVideos(opts: ListOptions = {}) {
  const prisma = getPrismaClient();
  const where: Record<string, unknown> = {};
  if (opts.region && opts.region !== "all") where.region = opts.region;
  where.status = opts.status && opts.status !== "all" ? opts.status : "published";

  return prisma.cmsVideo.findMany({
    where,
    include: { createdBy: { select: { id: true, name: true } } },
    orderBy: { publishedAt: "desc" },
    take: opts.limit ?? 50,
    skip: opts.skip ?? 0,
  });
}

export async function getVideoById(id: number) {
  const prisma = getPrismaClient();
  return prisma.cmsVideo.findUnique({
    where: { id },
    include: { createdBy: { select: { name: true } } },
  });
}

export async function createVideo(data: {
  title: string; slug: string; excerpt: string; richContent: string;
  coverImage?: string | null; videoUrl: string; videoDuration?: number | null;
  region: ContentRegion; status: ContentStatus; createdById: number;
}) {
  const prisma = getPrismaClient();
  return prisma.cmsVideo.create({
    data: {
      ...data,
      publishedAt: data.status === "published" ? new Date() : null,
      updatedById: data.createdById,
    },
  });
}

export async function updateVideo(id: number, data: Partial<{
  title: string; slug: string; excerpt: string; richContent: string;
  coverImage: string | null; videoUrl: string; videoDuration: number | null;
  region: ContentRegion; status: ContentStatus;
}>, updatedById: number) {
  const prisma = getPrismaClient();
  const existing = await prisma.cmsVideo.findUnique({ where: { id } });
  const wasPublished = existing?.status !== "published" && data.status === "published";
  return prisma.cmsVideo.update({
    where: { id },
    data: {
      ...data,
      updatedById,
      ...(wasPublished ? { publishedAt: new Date() } : {}),
      updatedAt: new Date(),
    },
  });
}

export async function deleteVideo(id: number) {
  const prisma = getPrismaClient();
  await prisma.cmsVideo.delete({ where: { id } });
}

// ─── Team Members ──────────────────────────────────────────────────────────
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  joined?: string | null;
  avatar: string | null;
  focus: string;
  teamType: 'management' | 'board';
  region: ContentRegion | null;
  status: ContentStatus;
  publishedAt: string | null;
  createdBy: { name: string };
}

export async function getTeamMembers(opts: ListOptions & { type?: 'management' | 'board' | 'all' } = {}) {
  const prisma = getPrismaClient();
  const where: Record<string, unknown> = {};
  if (opts.region && opts.region !== "all") where.region = opts.region;
  if (opts.type && opts.type !== "all") where.teamType = opts.type;
  where.status = opts.status && opts.status !== "all" ? opts.status : "published";

  const data = await prisma.cmsTeamMember.findMany({
    where,
    include: { createdBy: { select: { id: true, name: true } } },
    orderBy: { publishedAt: "desc" },
    take: opts.limit ?? 50,
    skip: opts.skip ?? 0,
  });

  return data as TeamMember[];
}

export async function getTeamMemberById(id: number) {
  const prisma = getPrismaClient();
  return prisma.cmsTeamMember.findUnique({
    where: { id },
    include: { createdBy: { select: { name: true } } },
  });
}

export async function createTeamMember(data: {
  name: string;
  slug: string;
  role: string;
  joined?: string | null;
  avatar?: { url: string | null } | null;
  focus: string;
  teamType: 'management' | 'board';
  region?: ContentRegion | null;
  status: ContentStatus;
  createdById: number;
}) {
  const prisma = getPrismaClient();
  return prisma.cmsTeamMember.create({
    data: {
      ...data,
      avatar: data.avatar?.url === "" ? null : data.avatar?.url,
      publishedAt: data.status === "published" ? new Date() : null,
      updatedById: data.createdById,
    },
  });
}

export async function updateTeamMember(id: number, data: Partial<{
  name: string;
  role: string;
  joined: string | null;
  avatar: { url: string | null };
  focus: string;
  teamType: 'management' | 'board';
  region: ContentRegion | null;
  status: ContentStatus;
}>, updatedById: number) {
  const prisma = getPrismaClient();
  const existing = await prisma.cmsTeamMember.findUnique({ where: { id } });
  const wasPublished = existing?.status !== "published" && data.status === "published";
  return prisma.cmsTeamMember.update({
    where: { id },
    data: {
      ...data,
      avatar: data.avatar?.url === "" ? null : data.avatar?.url,
      updatedById,
      ...(wasPublished ? { publishedAt: new Date() } : {}),
      updatedAt: new Date(),
    },
  });
}

export async function deleteTeamMember(id: number) {
  const prisma = getPrismaClient();
  await prisma.cmsTeamMember.delete({ where: { id } });
}

// ─── Media Items ───────────────────────────────────────────────────────────
export interface MediaItem {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  mediaType: 'gallery' | 'document';
  fileUrl: string;
  coverImage: string | null;
  region: ContentRegion | null;
  status: ContentStatus;
  publishedAt: string | null;
  createdBy: { name: string };
}

export async function getMediaItems(opts: ListOptions & { type?: 'gallery' | 'document' | 'all' } = {}) {
  const prisma = getPrismaClient();
  const where: Record<string, unknown> = {};
  if (opts.region && opts.region !== "all") where.region = opts.region;
  if (opts.type && opts.type !== "all") where.mediaType = opts.type;
  where.status = opts.status && opts.status !== "all" ? opts.status : "published";

  const data = await prisma.cmsMediaItem.findMany({
    where,
    include: { createdBy: { select: { id: true, name: true } } },
    orderBy: { publishedAt: "desc" },
    take: opts.limit ?? 50,
    skip: opts.skip ?? 0,
  });

  return data as MediaItem[];
}

export async function getMediaItemById(id: number) {
  const prisma = getPrismaClient();
  return prisma.cmsMediaItem.findUnique({
    where: { id },
    include: { createdBy: { select: { name: true } } },
  });
}

export async function createMediaItem(data: {
  title: string;
  slug: string;
  description?: string | null;
  mediaType: 'gallery' | 'document';
  fileUrl: string;
  coverImage?: string | null;
  region?: ContentRegion | null;
  status: ContentStatus;
  createdById: number;
}) {
  const prisma = getPrismaClient();
  return prisma.cmsMediaItem.create({
    data: {
      ...data,
      publishedAt: data.status === "published" ? new Date() : null,
      updatedById: data.createdById,
    },
  });
}

export async function updateMediaItem(id: number, data: Partial<{
  title: string;
  slug: string;
  description: string | null;
  mediaType: 'gallery' | 'document';
  fileUrl: string;
  coverImage: string | null;
  region: ContentRegion | null;
  status: ContentStatus;
}>, updatedById: number) {
  const prisma = getPrismaClient();
  const existing = await prisma.cmsMediaItem.findUnique({ where: { id } });
  const wasPublished = existing?.status !== "published" && data.status === "published";
  return prisma.cmsMediaItem.update({
    where: { id },
    data: {
      ...data,
      updatedById,
      ...(wasPublished ? { publishedAt: new Date() } : {}),
      updatedAt: new Date(),
    },
  });
}

export async function deleteMediaItem(id: number) {
  const prisma = getPrismaClient();
  await prisma.cmsMediaItem.delete({ where: { id } });
}

// ─── Hero Slides ───────────────────────────────────────────────────────────
export interface HeroSlide {
  id: string;
  label: string;
  heading: string;
  sub: string;
  bg: string;
  cta1Label: string;
  cta1Href: string;
  cta2Label: string;
  cta2Href: string;
  order: number;
  active: boolean;
}

const HERO_SLUG = "hero-slides-config";

export async function getHeroSlides(): Promise<HeroSlide[]> {
  const prisma = getPrismaClient();
  try {
    const record = await prisma.cmsContent.findUnique({ where: { slug: HERO_SLUG } });
    if (!record?.body) return [];
    const slides: HeroSlide[] = JSON.parse(record.body);
    return slides.filter((s) => s.active).sort((a, b) => a.order - b.order);
  } catch {
    return [];
  }
}

export async function saveHeroSlides(slides: HeroSlide[], userId: number) {
  const prisma = getPrismaClient();
  const body = JSON.stringify(slides);
  const existing = await prisma.cmsContent.findUnique({ where: { slug: HERO_SLUG } });
  if (existing) {
    await prisma.cmsContent.update({
      where: { slug: HERO_SLUG },
      data: { body, updatedById: userId },
    });
  } else {
    await prisma.cmsContent.create({
      data: {
        title: "Hero Slides Configuration",
        slug: HERO_SLUG,
        contentType: "blog",
        category: "announcement",
        level: "national",
        body,
        createdById: userId,
        updatedById: userId,
      },
    });
  }
}