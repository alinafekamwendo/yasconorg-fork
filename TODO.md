# CMS Extension: Management Team, Board, Gallery, Documents

Current Working Directory: c:/Users/ALINAFE KAMWENDO/Documents/Hasteal/Projects/yascon-website-main

## Plan Breakdown & Progress

### 1. Update Prisma Schema ✅ [Complete]

- [x] Edit prisma/schema.prisma: Add CmsTeamMember, CmsMediaItem models + enums CmsTeamType, CmsMediaType
- [x] Run `npx prisma db push && npx prisma generate` → DB in sync (tables cms_team_members, cms_media_items created), Prisma Client v7.5.0 generated

### 2. Update lib/cms/service.ts ✅ [Complete]

- [x] Add CRUD functions for teamMembers/mediaItems (getTeamMembers, createTeamMember etc.)
- [x] Cache keys "teams:", "media:", invalidation

### 3. Update lib/cms/constants.ts ✅ [Complete]

- [x] Add CMS_TEAM_TYPES, CMS_MEDIA_TYPES, TeamMember, MediaItem, ContentStatus types

### 4. Create API Routes ✅ [Complete]

- [x] app/(content_management)/api/cms/teams/route.ts & [id]/route.ts (CRUD)
- [x] app/(content_management)/api/cms/media/route.ts & [id]/route.ts (CRUD for gallery/documents)

### 5. Update Dashboard Index ✅ [Complete]

- [x] app/(content_management)/dashboard/cms/index/page.tsx: Added cards, unified href to /dashboard/cms for existing, new specific

### 6. Extend CmsClient.tsx for New Types [Next]

- [ ] Update TYPE_MAP, TYPE_LABEL (team:"teams", media:"media")
- [ ] Fetch /api/cms/teams?status=all, /api/cms/media?status=all in refreshContent
- [ ] Add "team", "media" to filters
- [ ] Adapt ContentItem for structured data (use title = name, excerpt=role etc.)

### 2. Update lib/cms/service.ts

- [ ] Add CRUD for teams: getTeamMembers, createTeamMember, updateTeamMember, deleteTeamMember
- [ ] Add CRUD for boards, gallery, documents (similar pattern)
- [ ] Update cache invalidation

### 3. Update lib/cms/constants.ts

- [ ] Export types: TeamMember, BoardMember, GalleryItem, Document
- [ ] Extend CMS types if needed

### 4. Create API Routes

- [ ] app/(content_management)/api/cms/teams/route.ts (GET/POST)
- [ ] app/(content_management)/api/cms/teams/[id]/route.ts (GET/PATCH/DELETE)
- [ ] Similarly: boards/, gallery/, documents/

### 5. Update Dashboard Index

- [ ] app/(content_management)/dashboard/cms/index/page.tsx: Add 4 new content type cards

### 6. Extend CmsClient.tsx for New Types

- [ ] Update TYPE_MAP, TYPE_LABEL, STATUS_STYLE
- [ ] Handle new content types in lists/manage/create
- [ ] Custom display for structured data (name/role vs richContent)

### 7. Create Dashboard Management Pages

- [ ] app/(content_management)/dashboard/cms/teams/create/page.tsx (structured form)
- [ ] Similarly: boards/create, gallery/create, documents/create
- [ ] List pages: teams/, boards/ etc.

### 8. Create Frontend Display Components

- [ ] components/cms/TeamDisplay.tsx, BoardDisplay.tsx etc.
- [ ] Update common/About.tsx if used

### 9. Update Frontend Pages

- [ ] app/(website)/about/management/page.tsx: Fetch from service, replace hardcoded
- [ ] app/(website)/impact/national/management/page.tsx
- [ ] app/(website)/impact/national/board/page.tsx
- [ ] Create app/(website)/gallery/page.tsx, /documents/page.tsx if needed

### 10. Migrate Sample Data

- [ ] Create seed script or manual entry via CMS dashboard

### 11. Testing & Deployment

- [ ] Test CRUD via dashboard
- [ ] Verify frontend displays
- [ ] Check permissions/regions
- [ ] attempt_completion

**Next Step:** Database migration after schema update.
