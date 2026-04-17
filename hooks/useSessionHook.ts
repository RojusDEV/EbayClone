// "use client";
// import { useEffect, useState } from "react";
// import { createClient } from "../utils/supabase/client/client";
// import { JwtPayload, jwtDecode } from "jwt-decode";

// interface JwtPayloadType extends JwtPayload {
//   user_role?: string;
// }

// const useSessionHook = () => {
//   const [userLoaded, setUserLoaded] = useState(false);
//   const [user, setUser] = useState(null);
//   const [session, setSession] = useState(null);
//   const supabase = createClient();
//   useEffect(() => {
//     function saveSession(
//       /** @type {Awaited<ReturnType<typeof supabase.auth.getSession>>['data']['session']} */
//       session: any,
//     ) {
//       setSession(session);
//       const currentUser = session?.user;
//       if (session) {
//         const jwt = jwtDecode<JwtPayloadType>(session.access_token);
//         currentUser.appRole = jwt.user_role;
//       }
//       setUser(currentUser ?? null);
//       setUserLoaded(!!currentUser);
//     }

//     supabase.auth
//       .getSession()
//       .then(({ data: { session } }) => saveSession(session));

//     const {
//       data: { subscription: authListener },
//     } = supabase.auth.onAuthStateChange(async (event, session) => {
//       console.log(session);
//       saveSession(session);
//     });
//     return () => {
//       authListener.unsubscribe();
//     };
//   }, []);
//   return { user: user, session: session, userLoaded: userLoaded };
// }

// export default useSessionHook
