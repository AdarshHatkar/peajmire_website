"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { PhotoProvider } from "react-photo-view";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <NextUIProvider>
        <PhotoProvider maskOpacity={0.5}>{children}</PhotoProvider>
      </NextUIProvider>
    </ThemeProvider>
  );
}
