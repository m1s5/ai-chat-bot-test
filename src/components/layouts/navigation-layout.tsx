import Head from "next/head";
import React, { useState } from "react";
import type { ReactNode } from "react";

type NavigationLayoutProps = {
  children: ReactNode;
};

export default function NavigationLayout({ children }: NavigationLayoutProps) {
  const [isNavigationOpen, setNavigationOpen] = useState(false);
  return (
    <>
      <Head>
        <title>AI Chat</title>
      </Head>
      <div className="fixed flex h-full min-h-0 w-full flex-col bg-gradient-to-b from-gray-700 to-black  font-sans text-white [font-size:_clamp(1em,2vw,1.5em)]">
        <nav className="border-gray-200 bg-white dark:bg-gray-900">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <div className="h-8 w-8 rounded-full bg-gray-400" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                AiChat
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-default"
              aria-expanded={`${isNavigationOpen}`}
              onClick={() => setNavigationOpen((v) => !v)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`${isNavigationOpen ? "block" : "hidden"
                } w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                <li>
                  <a
                    href="#"
                    className="block rounded bg-teal-700 px-3 py-2 text-white dark:text-white md:bg-transparent md:p-0 md:text-teal-700 md:dark:text-teal-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-teal-700 md:dark:hover:bg-transparent md:dark:hover:text-teal-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-teal-700 md:dark:hover:bg-transparent md:dark:hover:text-teal-500"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-teal-700 md:dark:hover:bg-transparent md:dark:hover:text-teal-500"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-teal-700 md:dark:hover:bg-transparent md:dark:hover:text-teal-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="flex h-full min-h-0 flex-grow flex-col items-center justify-center gap-5 p-5">
          {children}
        </main>
      </div>
    </>
  );
}
