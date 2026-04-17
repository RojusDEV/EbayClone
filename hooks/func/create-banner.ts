import { TypedSupabaseClient } from "@/lib/utils/types";


export type bannerProps = {
  backgroundImage_url: string;
  heading: string;
  subHeading: string;
  buttonName: string;
  redirectPath: string;
  subCategory_id?: number;
  category_id?: number;
}

function createBanner(client: TypedSupabaseClient, params: bannerProps) {
  return client.from("banners").insert(params).throwOnError();
}


export default createBanner