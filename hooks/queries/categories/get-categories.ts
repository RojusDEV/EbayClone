import { TypedSupabaseClient } from "@/lib/utils/types";

export default function getCategories(client: TypedSupabaseClient) {
  return client.from("categories").select().throwOnError();
}
