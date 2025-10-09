// middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // redirect here if not authenticated
  },
});

export const config = {
  matcher: ["/dashboard/:path*"], // protects /dashboard and all nested routes
};
