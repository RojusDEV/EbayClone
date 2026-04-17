import useSupabaseBrowser from "@/lib/utils/supabase-browser";
import createGroup from "../func/create-group";
import { useMutation } from "@tanstack/react-query";

function useCreateGroupMutation() {
  const client = useSupabaseBrowser();

  const mutationFn = async (group: { groupName: string }) => {
    return createGroup(client, group).then((result) => result.data);
  };

  return useMutation({ mutationFn });
}

export default useCreateGroupMutation;
