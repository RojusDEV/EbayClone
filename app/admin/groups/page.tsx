"use client";
import useCreateGroupMutation from "@/hooks/mutations/use-create-group-mutation";
import useGroupsQuery from "@/hooks/queries/use-groups-query";
import React, { useState } from "react";

const Page = () => {
  const { data: groups } = useGroupsQuery();
  const [groupName, setGroupName] = useState("");
  const createGroupMutation = useCreateGroupMutation();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createGroupMutation.mutate({ groupName: groupName });
  };
  return (
    <div className="px-8 py-8">
      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          type="text"
          className="rounded-lg  border-4 border-emerald-400"
          onChange={(e) => setGroupName(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 bg-emerald-700 text-white rounded-lg">Add</button>
      </form>
      <span>List of Groups</span>
      <ul>
        {groups && groups.map((group, index) => (
          <li key={index}>{group.group_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
