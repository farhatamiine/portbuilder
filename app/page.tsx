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
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { UserNav } from "@/components/UserNav";
import { Button } from "@/components/ui/button";

interface DashboardProps {
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export default function Home({
  defaultLayout = [200, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}: DashboardProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes
        )}`;
      }}
      className="h-full  items-stretch"
    >
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={navCollapsedSize}
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
            },
            {
              title: "Theme Selection",
              icon: Wand2Icon,
              variant: "ghost",
            },
            {
              title: "Domain management",
              icon: Globe2Icon,
              variant: "ghost",
            },
            {
              title: "My Media Library",
              icon: FileIcon,
              variant: "ghost",
            },
            {
              title: "Export resume",
              icon: UploadIcon,
              variant: "ghost",
            },
            {
              title: "Settings",
              icon: CogIcon,
              variant: "ghost",
            },
            {
              title: "Help and Support",
              icon: HelpCircleIcon,
              variant: "ghost",
            },
            {
              title: "Upgrade",
              icon: CoinsIcon,
              variant: "ghost",
            },
            {
              title: "Logout",
              icon: LogOutIcon,
              variant: "ghost",
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
              <Button
                className="rounded-full border-slate-900"
                variant={"outline"}
              >
                <Share2Icon className="mr-2 h-4 w-4" /> Share your profile
              </Button>
              <UserNav />
            </div>
          </div>
        </header>
        <section className="p-4 bg-gray-100 h-full">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            blanditiis beatae ipsam! Saepe ipsam repellendus officiis
            repudiandae, qui unde consequatur consequuntur veritatis at error,
            alias adipisci hic laudantium nobis non!
          </p>
        </section>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
