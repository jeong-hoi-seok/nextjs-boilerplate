import createNextIntlMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';

import { routing } from './i18n/routing';

const nextIntlMiddleware = createNextIntlMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const response = await nextIntlMiddleware(request);

  return response;
}

export const config = {
  // 국제화된 경로명만 일치
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*|icons|fonts|images|opengraph|ads.txt|app-ads.txt|sitemap.xml|robots.txt).*)',
  ],
};
