import { TypedSupabaseClient } from "@/lib/utils/types";

function createGroup(client: TypedSupabaseClient, params: {groupName: string}) {
  return client.from("group").insert({ group_name: params.groupName }).throwOnError();
}


export default createGroup