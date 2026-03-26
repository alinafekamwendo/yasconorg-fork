export const CMS_SESSION_COOKIE = "cms_session";

export interface CmsUserRecord {
  id: number;
  name: string;
  email: string;
  role: "super_admin" | "regional_admin";
  region: "national" | "northern" | "central" | "southern" | "eastern";
  created_at: string;
}
