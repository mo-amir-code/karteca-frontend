import type { Metadata, Viewport } from "next";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";
import { Toaster } from "react-hot-toast";
import Headers from "./Headers";
import { Poppins, Teko } from "next/font/google";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Paykart - Earn & Shop",
  description: "Share & Earn money | Shop on PayKart",
};

export const viewport: Viewport = {
  themeColor: "#744CCD",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={
            poppins.className +
            "max-md:h-screen max-md:overflow-hidden max-md:overflow-y-auto relative"
          }
        >
          <ReduxProvider>{children}</ReduxProvider>
          <Toaster />
        </body>
      </html>
      <Headers />
    </>
  );
}
