import { createClient } from "@/lib/utils/supabase/server/server";
import { cookies } from "next/headers";
import React, { use } from "react";
import UserCard from "./UserCard";

const UserList = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: users, error } = await supabase.auth.admin.listUsers();
  console.log(error);
  console.log(users);

  return (
    <>
      <div>UserList</div>
      {/* {users &&
        users.users.map((user) => (
          <UserCard
            user_name={user.email}
            avatar_url={user.user_metadata.}
            user_id={user.id}
            key={user.id}
          />
        ))} */}
    </>
  );
};

export default UserList;
