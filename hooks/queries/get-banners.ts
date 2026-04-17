import { TypedSupabaseClient } from "@/lib/utils/types";

export default function getBanners(
  client: TypedSupabaseClient,
  bannerId?: number,
) {
  return bannerId
    ? client.from("banners").select().eq("brand_id", bannerId).throwOnError()
    : client.from("banners").select().throwOnError();
}
