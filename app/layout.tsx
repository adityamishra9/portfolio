import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/layout/navbar";
import { SiteConfig } from "@/lib/config";
import HeroTitle from "@/components/layout/HeroTitle";
import { NextUIProviders } from "@/providers/NextUIProvider";
import Footer from "@/components/layout/Footer";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],

  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SiteConfig.site.name,
    template: `%s | ${SiteConfig.site.name}`,
  },
  description: SiteConfig.site.description,
  verification: {
    google: "W5Me7t9onbCSbpUugk9Pw2XP_KuYnu5IytE1h8eLVJg",
  },
  openGraph: {
    title: SiteConfig.site.name,
    description: SiteConfig.site.description,
    type:"website"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={ubuntu.className + " min-h-screen"}>
        <NextUIProviders>
          <MainNavbar />
          {/* <HeroTitle /> */}
          <div className="px-5 md:max-w-5xl lg:max-w-6xl mx-auto min-h-screen flex flex-col mt-7 ">
            {children}
          </div>
          <Footer />
        </NextUIProviders>
      </body>
    </html>
  );
}
