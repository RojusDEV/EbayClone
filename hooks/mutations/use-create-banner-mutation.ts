import useSupabaseBrowser from "@/lib/utils/supabase-browser";
import createBanner, { bannerProps } from "../func/create-banner";
import { useMutation } from "@tanstack/react-query";

function useCreateBannerMutation() {
  const client = useSupabaseBrowser();

  const mutationFn = async (params: bannerProps) => {
    return createBanner(client, params).then((result) => result.data);
  };

  return useMutation({ mutationFn });
}

export default useCreateBannerMutation;
