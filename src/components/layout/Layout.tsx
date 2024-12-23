import { type ReactNode } from "react";
import NavBar from "./NavBar";
import Head from "next/head";
import { ThemeToggle } from "../ui/ThemeToggle";

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
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-steampunk-background">
        <NavBar />
        <main className="container mx-auto p-6">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-steampunk-border dark:bg-steampunk-surface">
            {children}
          </div>
        </main>
        
        <div className="fixed bottom-4 left-4 z-50">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
