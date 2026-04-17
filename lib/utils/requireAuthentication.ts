import { getSession } from "next-auth/react";

const requireAuthentication = async (context: any, cb: any) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        pernament: false,
      },
    };
  }
  return cb();
};

export default requireAuthentication;
