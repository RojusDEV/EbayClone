import useSupabaseBrowser from "@/lib/utils/supabase-browser";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getGroups from "../func/get-groups";

function useGroupsQuery() {
  const client = useSupabaseBrowser();
  const queryKey = ["productGroups"];

  const queryFn = async () => {
    return getGroups(client).then((result) => result.data);
  };
  return useQuery({ queryFn, queryKey });
}

export default useGroupsQuery;
