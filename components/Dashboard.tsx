"use client";

import { Nav } from "@/components/Nav";

import { useState, Fragment } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  LayoutDashboard,
  Search,
  Wand2Icon,
  Globe2Icon,
  FileIcon,
  UploadIcon,
  CogIcon,
  HelpCircleIcon,
  CoinsIcon,
  LogOutIcon,
  Share2Icon,
  ScrollText,
  MenuIcon,
  SearchIcon,
  BellIcon,
  ChevronDownCircle,
  XIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface DashboardProps {
  children: React.ReactNode;
}

const navigation = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    current: false,
    href: "dashboard",
  },
  {
    title: "My Portfolio",
    icon: ScrollText,
    current: true,
    href: "portfolio",
  },
  {
    title: "Theme Selection",
    icon: Wand2Icon,
    current: false,
    href: "dashboard",
  },
  {
    title: "Domain management",
    icon: Globe2Icon,
    current: false,
    href: "dashboard",
  },
  {
    title: "My Media Library",
    icon: FileIcon,
    current: false,
    href: "myfiles",
  },
  {
    title: "Export resume",
    icon: UploadIcon,
    current: false,
    href: "dashboard",
  },
  {
    title: "Settings",
    icon: CogIcon,
    current: false,
    href: "dashboard",
  },
  {
    title: "Help and Support",
    icon: HelpCircleIcon,
    href: "dashboard",
    current: false,
  },
  {
    title: "Upgrade",
    icon: CoinsIcon,
    href: "dashboard",
    current: false,
  },
];

export function Dashboard({ children }: DashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="/logo.png"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.title}>
                                <Link
                                  href={`/${item.href}`}
                                  className={cn(
                                    item.current
                                      ? "bg-gray-50 text-slate-600"
                                      : "text-gray-700 hover:text-slate-600 hover:bg-gray-50",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className={cn(
                                      item.current
                                        ? "text-slate-600"
                                        : "text-gray-400 group-hover:text-slate-600",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img className="h-8 w-auto" src="/logo.png" alt="Your Company" />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={`/${item.href}`}
                          className={cn(
                            item.current
                              ? "bg-gray-50 text-slate-600"
                              : "text-gray-700 hover:text-slate-600 hover:bg-gray-50",
                            "group flex gap-x-3 rounded-md p-2 md:mb-3 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className={cn(
                              item.current
                                ? "text-slate-600"
                                : "text-gray-400 group-hover:text-slate-600",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-200 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <SearchIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                  aria-hidden="true"
                />
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          <main className="py-5">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
