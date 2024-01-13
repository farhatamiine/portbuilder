import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import { PropsWithChildren } from "react";
import "react-loading-skeleton/dist/skeleton.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portbuilder",
  description: "A simple way to build your dream portfolio",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="h-full  box-border">
      <Providers>
        <body className={cn("h-full antialiased", inter.className)}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
