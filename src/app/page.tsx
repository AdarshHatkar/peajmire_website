"use client";

import Image from "next/image";

import primexopLogo from "@assets/images/primexopLogo.png";

export default function HomePage() {
  return (
    <>
      <div className="text-center border-1 border-green-500 ">
        {/* <h1>Home Page</h1> */}
        <p>Home Page Content</p>
        <div className="flex flex-col items-center justify-center">
          <Image src={primexopLogo} alt="primexopLogo" width={100} height={100} />

        </div>
      </div>
    </>
  );
}
