// Set VITE_SITE_URL in your .env.local (dev) or Vercel environment variables (production)
export const SITE_URL = import.meta.env.VITE_SITE_URL ?? ""
export const SITE_NAME = "Greg Homstad"
export const SITE_OG_IMAGE = SITE_URL ? `${SITE_URL}/Greg.jpg` : ""
export const SITE_TWITTER_HANDLE = "@greghomstad"
