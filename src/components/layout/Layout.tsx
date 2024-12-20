import { type ReactNode } from "react";
import NavBar from "./NavBar";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} - Fleet Management` : "Fleet Management"}
        </title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <main className="container mx-auto p-6">{children}</main>
      </div>
    </>
  );
}
