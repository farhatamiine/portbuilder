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

interface DashboardProps {
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize?: number;
  children: React.ReactNode,
}

export function Dashboard({
  defaultLayout = [200, 655],
  defaultCollapsed = false,
  children,
}: DashboardProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full  items-stretch"
    >
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsible={false}
        minSize={15}
        maxSize={15}
        className={cn(
          isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out"
        )}
      >
        <div
          className={cn(
            "flex h-[52px] items-center justify-center",
            isCollapsed ? "h-[52px]" : "px-2"
          )}
        >
          <img src="/logo.png" alt="" />
        </div>

        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Dashboard",
              icon: LayoutDashboard,
              variant: "default",
              href:"dashboard"
            },
            {
              title: "My Portfolio",
              icon: ScrollText,
              variant: "ghost",
              href:"portfolio"
            },
            {
              title: "Theme Selection",
              icon: Wand2Icon,
              variant: "ghost",
              href:"dashboard"
            },
            {
              title: "Domain management",
              icon: Globe2Icon,
              variant: "ghost",
              href:"dashboard"
            },
            {
              title: "My Media Library",
              icon: FileIcon,
              variant: "ghost",
              href:"dashboard"
            },
            {
              title: "Export resume",
              icon: UploadIcon,
              variant: "ghost",
              href:"dashboard"
            },
            {
              title: "Settings",
              icon: CogIcon,
              variant: "ghost",
              href:"dashboard"
            },
            {
              title: "Help and Support",
              icon: HelpCircleIcon,
              href:"dashboard",
              variant: "ghost",
            },
            {
              title: "Upgrade",
              icon: CoinsIcon,
              href:"dashboard",
              variant: "ghost",
            },
            {
              title: "Logout",
              icon: LogOutIcon,
              variant: "ghost",
              href:"dashboard"
            },
          ]}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <header className="flex items-center px-4 py-7 border-b ">
          <div className="flex justify-between w-full px-4 items-center">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <div className="flex gap-3 items-center">
             
              <UserNav />
            </div>
          </div>
        </header>
        <section className="p-4 bg-gray-100 h-full">
          {children}
        </section>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
