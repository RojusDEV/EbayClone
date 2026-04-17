import getCategoryBrands from "./get-categoryBrands";
import useSupabaseBrowser from "@/lib/utils/supabase-browser";
import { useQuery } from "@tanstack/react-query";

export default function useCategoryBrandsQuery(category_label: string) {
  const client = useSupabaseBrowser();
  const queryFn = async () => {
    return getCategoryBrands({
      client: client,
      category_label: category_label,
    }).then((result) => result.data);
  };
  return useQuery({
    queryKey: ["category_brands"],
    queryFn: queryFn,
    staleTime: 60 * 60 * 1000 * 24,
  });
}
