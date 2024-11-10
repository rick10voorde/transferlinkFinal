import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Publieke routes die geen auth nodig hebben
  publicRoutes: ["/"],
  // Routes die auth checks overslaan
  ignoredRoutes: ["/api/public"]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};