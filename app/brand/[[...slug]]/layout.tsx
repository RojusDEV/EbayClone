import CategoryAside from "@/components/layout/Aside/CategoryAside";
import Banner from "@/components/layout/Banner/Banner";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import Tabs from "@/components/layout/Tabs/Tabs";
import React from "react";

const layout = ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <Header screenDimention="fullScreen" />
      <Tabs />

      <div className="mx-auto max-w-[92rem] px-4 xl:px-0">
        <div className="grid grid-cols-1 gap-6 py-6 lg:grid-cols-brandLayout lg:gap-8">
          <aside className="min-w-0">
            <CategoryAside params={params} />
          </aside>
          <div className="min-w-0">{children}</div>
          {/* TODO pagination */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default layout;
