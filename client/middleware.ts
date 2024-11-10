// client/middleware.ts
import { authMiddleware, clerkClient } from '@clerk/nextjs';

export default authMiddleware();

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};