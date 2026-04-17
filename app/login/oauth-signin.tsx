"use client";
import { FaGithub } from "react-icons/fa";
import { Provider } from "@supabase/supabase-js";
import { oAuthSignIn } from "./actions";
import { FcGoogle } from "react-icons/fc";

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export function OAuthButtons({showLoginMessage}: {showLoginMessage: boolean}) {
  const oAuthProviders: OAuthProvider[] = [
    {
      name: "github",
      displayName: "GitHub",
      icon: <FaGithub className="size-5" />,
    },
    {
      name: "google",
      displayName: "Google",
      icon: <FcGoogle className="size-5" />,
    },
  ];

  return (
    <>
      {oAuthProviders.map((provider) => (
        <button
          className="flex w-full items-center justify-center gap-2 rounded-md border-[1px] border-black px-2 py-2 font-semibold text-zinc-700 hover:bg-zinc-300"
          onClick={async () => {
            await oAuthSignIn(provider.name);
          }}
          key={provider.name}
        >
          {provider.icon}
          {showLoginMessage ? "Continue with " : ""}
          {provider.displayName}
        </button>
      ))}
    </>
  );
}
