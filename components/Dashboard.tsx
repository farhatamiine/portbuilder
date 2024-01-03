"use client";

import { Nav } from "@/components/Nav";
import { useState } from "react";
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
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { UserNav } from "@/components/UserNav";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"
interface DashboardProps {

  children: React.ReactNode,
}

export function Dashboard({

  children,
}: DashboardProps) {


  return (
    <section className="flex h-full"
    >
      <aside
        className={"shadow-lg"}
      >
        <div
          className={"p-5 w-full flex items-center justify-center"}
        >
          <img src="/logo.png" alt="" />
        </div>

        <Nav
          links={[
            {
              title: "Dashboard",
              icon: LayoutDashboard,
              variant: "default",
              href: "dashboard"
            },
            {
              title: "My Portfolio",
              icon: ScrollText,
              variant: "ghost",
              href: "portfolio"
            },
            {
              title: "Theme Selection",
              icon: Wand2Icon,
              variant: "ghost",
              href: "dashboard"
            },
            {
              title: "Domain management",
              icon: Globe2Icon,
              variant: "ghost",
              href: "dashboard"
            },
            {
              title: "My Media Library",
              icon: FileIcon,
              variant: "ghost",
              href: "dashboard"
            },
            {
              title: "Export resume",
              icon: UploadIcon,
              variant: "ghost",
              href: "dashboard"
            },
            {
              title: "Settings",
              icon: CogIcon,
              variant: "ghost",
              href: "dashboard"
            },
            {
              title: "Help and Support",
              icon: HelpCircleIcon,
              href: "dashboard",
              variant: "ghost",
            },
            {
              title: "Upgrade",
              icon: CoinsIcon,
              href: "dashboard",
              variant: "ghost",
            },
            {
              title: "Logout",
              icon: LogOutIcon,
              variant: "ghost",
              href: "dashboard"
            },
          ]}
        />
      </aside>

      <section className="flex flex-1 flex-col">
        <header className="flex items-center px-4 py-4 border-b ">
          <div className="flex justify-between w-full px-4 items-center">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <div className="flex gap-3 items-center">
              <UserNav />
            </div>
          </div>
        </header>
        <ScrollArea className=" bg-gray-100 h-full p-5">
          {children}
        </ScrollArea>
      </section>
    </section>
  );
}
