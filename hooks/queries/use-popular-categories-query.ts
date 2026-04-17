import { getPopularCategories } from "../func/getPopularCategories";
import { TypedSupabaseClient } from "@/lib/utils/types";

function usePopularCategoriesQuery({
  client,
}: {
  client: TypedSupabaseClient;
}) {
  const queryKey = ["popularCategories"];

  const queryFn = async () => {
    return getPopularCategories(client).then((result) => result.data);
  };

  return {
    queryKey,
    queryFn,
    staleTime: 60 * 60 * 1000 * 24,
  };
}

export default usePopularCategoriesQuery;
