import "./globals.css";
import type { Metadata } from "next";
import { metaData } from "./constants";
import { Providers } from "./providers";
import Header from "./common/header";
import Footer from "./common/footer";
import "react-photo-view/dist/react-photo-view.css";

export const metadata: Metadata = {
    title: metaData.title,
    description: metaData.description,
    keywords: metaData.keywords.join(", "),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <Providers>
                    <div className="bg-white w-full">
                        <Header />
                        <div className="min-h-screen">{children}</div>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
