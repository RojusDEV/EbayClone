import useSupabaseBrowser from "@/lib/utils/supabase-browser";
import getCategories from "./get-categories";
import { useQuery } from "@tanstack/react-query";

export default function useCategoriesQuery() {
  const client = useSupabaseBrowser();
  const queryfn = async () => {
    return getCategories(client).then((result) => result.data);
  };
  return useQuery({
    queryKey: ["categories"],
    queryFn: queryfn,
    staleTime: 60 * 60 * 1000 * 5,
  }); //5 hours
}
