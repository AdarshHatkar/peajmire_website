import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { metaData } from "./constants";
import "react-photo-view/dist/react-photo-view.css";

const fontFamily = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(metaData.homePageURL),
  title: metaData.title,
  description: metaData.description,
  keywords: metaData.keywords,

  openGraph: {
    title: metaData.title,
    description: metaData.description,
    type: "website",
    locale: "en_IE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body
        className={fontFamily.className + " dark:bg-black"}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
