"use client";

import Header from "./common/header";
import Footer from "./common/footer";

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div
        className={`relative  flex flex-col  justify-between overflow-hidden min-h-screen bg-white  `}
      >
        <Header />
        <div className="">{children}</div>

        <Footer />
      </div>
    </>
  );
}
