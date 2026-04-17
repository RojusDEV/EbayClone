import { TypedSupabaseClient } from "@/lib/utils/types";

export default function getCategoryBrands({
  client,
  category_label,
}: {
  client: TypedSupabaseClient;
  category_label: string;
}) {
  return client
    .from("category_brands")
    .select()
    .eq("category_label", category_label)
    .throwOnError();
}
