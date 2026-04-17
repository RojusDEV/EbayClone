"use client";
import React, { useState } from "react";
import AsideTab from "./AsideTab/AsideTab";

const Aside = () => {
  const [selected, setSelected] = useState(1);
  const list = ["", "products", "banners", "categories", "users", "groups"];
  return (
    <aside className="h-screen rounded-lg border-4">
      <div className="mt-16">
        <ul className="grid gap-4">
          {list.map((el, index) => (
            <AsideTab
              selected={selected}
              setSelected={setSelected}
              tabNumber={index + 1}
              tabRedirectSrc={el}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
