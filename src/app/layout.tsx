import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import BigEllipse from "@/components/BigEllipse/BigEllipse";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <BigEllipse />
        <main>{children}</main>
      </body>
    </html>
  );
}
