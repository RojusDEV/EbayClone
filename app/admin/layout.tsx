import PrivateWrapper from "@/components/PrivateWrapper";
import Aside from "../../components/frontend/admin/Aside";
import { Toaster } from "react-hot-toast";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrivateWrapper>
      <div className="flex">
        <Aside />
        {children}
        <Toaster position="top-right" />
      </div>
    </PrivateWrapper>
  );
}
