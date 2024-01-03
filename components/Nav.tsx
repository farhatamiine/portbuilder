"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";


interface NavProps {
  links: {
    title: string;
    icon: LucideIcon;
    href: string | "#",
    variant: "default" | "ghost";
  }[];
}

export function Nav({ links }: NavProps) {

  const router = usePathname();
  console.log();

  return (
    <div

      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={cn(
              buttonVariants({ variant: link.href === router.split("/")[2] ? "default" : "ghost", size: "lg" }),
              link.variant === "default" &&
              "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
              "justify-start my-2"
            )}
          >
            <link.icon className="mr-2 h-4 w-4" />
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
