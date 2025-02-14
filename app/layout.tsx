import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import NavBar from "@/components/NavBar";
import { OptimeLogo } from "@/components/Icons";
import { Link } from "@nextui-org/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Smart Choice - Expert Support",
    template: `%s - Smart Choice - Expert Support`,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} font-sans`}
    >
      <head />
      <body className={clsx("min-h-screen  antialiased")}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <main className="relative flex  bg-background flex-col h-screen w-screen">
            {/* <NavBar /> */}
            <div className="text-center pt-10 mb-4">
              <p className="text-xl font-semibold text-transparent">
                <span className="font-bold">Smart Choice -</span> <span className="font-light">Expert Support</span>
              </p>
            </div>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
