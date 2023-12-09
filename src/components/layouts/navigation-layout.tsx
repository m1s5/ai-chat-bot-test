import Head from "next/head";
import React from "react";
import type { ReactNode } from "react";
type NavigationLayoutProps = {
  children: ReactNode;
};

export default function NavigationLayout({ children }: NavigationLayoutProps) {
  return (
    <>
      <Head>
        <title>AI Chat</title>
      </Head>
      <div className="fixed  flex h-screen min-h-0 w-full flex-col bg-gradient-to-b from-gray-700 to-black  font-sans text-white [font-size:_clamp(1em,2vw,1.5em)]">
        <nav className="flex h-20 items-center justify-between bg-gray-800 p-5">
          <ul className="flex gap-4">
            <li>it-1</li>
            <li>it-2</li>
            <li>it-3</li>
            <li>it-4</li>
            <li>it-5</li>
          </ul>
          <div className="h-14 w-14 rounded-full border-gray-50 bg-gray-400"></div>
        </nav>
        <main className="flex h-full min-h-0 flex-grow flex-col items-center justify-center gap-5 p-5">
          {children}
        </main>
      </div>
    </>
  );
}
