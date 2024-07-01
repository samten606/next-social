import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProctedRoute = createRouteMatcher(["/settings(.*)"])

export default clerkMiddleware((auth, req)=>{
    if(isProctedRoute(req)) auth().protect();
    
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};