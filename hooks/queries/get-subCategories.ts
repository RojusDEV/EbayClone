import { TypedSupabaseClient } from "@/lib/utils/types";

function getSubCategories(
  client: TypedSupabaseClient,
  category_id: number,
) {
  return client.from("subCategories").select().eq("category_id", category_id);
}

export default getSubCategories;
