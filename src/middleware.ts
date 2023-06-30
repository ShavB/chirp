import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();
console.log("Middle ware running");
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};