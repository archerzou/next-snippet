import { clerkMiddleware } from "@clerk/nextjs/server";

import createMiddleware from "next-intl/middleware";
import { LOCALES } from "./i18n";
const intlMiddleware = createMiddleware({
  locales: LOCALES,
  defaultLocale: "en",
});

export default clerkMiddleware((auth, req) => {
  if (!req.url.includes("/api")) {
    return intlMiddleware(req);
  }
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
