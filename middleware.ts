import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/utils/supabase/middleware";
import isAuthenticated from "./hooks/helpers/isAuthenticated";
import { cookies } from "next/headers";

// export async function middleware(request: NextRequest) {
//   return await updateSession(request);
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * Feel free to modify this pattern to include more paths.
//      */
//     "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
//   ],
// };

export const config = {
  matcher: "/admin/:function*",
};

export function middleware(request: NextRequest) {
  // Call our authentication function to check the request
  const cookieStore = cookies();
  if (!isAuthenticated(cookieStore)) {
    // Respond with JSON indicating an error message
    return Response.json(
      { success: false, message: "authentication failed" },
      { status: 401 },
    );
  }
}
