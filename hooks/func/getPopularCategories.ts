import { TypedSupabaseClient } from "@/lib/utils/types";

export function getPopularCategories(client: TypedSupabaseClient) {
  return client.from('popular_categories').select().throwOnError();
}
