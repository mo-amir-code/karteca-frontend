import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";

export const metadata: Metadata = {
  title: "Paykart - Earn & Shop",
  description: "Share & Earn money | Shop on PayKart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "max-md:h-screen max-md:overflow-hidden max-md:overflow-y-auto relative"
        }
      >
        <ReduxProvider>
          {children}
          </ReduxProvider>
      </body>
    </html>
  );
}
