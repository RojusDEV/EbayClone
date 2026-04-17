import Link from "next/link";
import React, { useTransition } from "react";

type asideTabType = {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  tabNumber: number;
  tabRedirectSrc: string;
};

const AsideTab = ({
  selected,
  setSelected,
  tabNumber,
  tabRedirectSrc,
}: asideTabType) => {
  const [isPending, startTransition] = useTransition();
  return (
    <li>
      <Link
        href={`/admin/${tabRedirectSrc}`}
        className={`cursor-pointer p-4 text-gray-500 ${selected === tabNumber ? "border-r-4 border-sky-600 bg-[#F4F6F9] text-black" : ""}`}
        onClick={() =>
          startTransition(() => {
            setSelected(tabNumber)
          })
        }
      >
        <span className="capitalize">
          {tabRedirectSrc.length > 0 ? tabRedirectSrc : "Home"}
        </span>
      </Link>
    </li>
  );
};

export default AsideTab;
