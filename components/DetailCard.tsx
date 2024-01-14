import React from "react";

import { CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { truncateString } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DotIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DetailCardProps {
  title: string;
  image: string | null;
  description: string;
  badges: String[];
}

export default function DetailCard({
  badges,
  description,
  title,
  image,
}: DetailCardProps) {
  const finalImage =
    image || "https://generated.vusercontent.net/placeholder.svg";

  return (
    <Card className="w-full h-fit mb-2">
      <CardContent className="p-4 flex md:flex-row flex-col items-center">
        <Image
          alt="Project image"
          className="h-40 w-80 border object-cover mr-5 rounded"
          height="200"
          src={finalImage}
          width="350"
        />
        <div className="mt-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-gray-600">
            {truncateString(description, 100)}
          </p>
          <div className="flex  mt-4 justify-between items-center">
            <div className={"space-x-2"}>
              {badges.map((badge, index) => {
                return (
                  <Badge key={index} variant="secondary">
                    {badge}
                  </Badge>
                );
              })}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <svg
                  fill="none"
                  focusable="false"
                  height="24"
                  role="img"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M5.5 13.5C4.67157 13.5 4 12.8284 4 12C4 11.1716 4.67157 10.5 5.5 10.5C6.32843 10.5 7 11.1716 7 12C7 12.8284 6.32843 13.5 5.5 13.5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M18.5 13.5C17.6716 13.5 17 12.8284 17 12C17 11.1716 17.6716 10.5 18.5 10.5C19.3284 10.5 20 11.1716 20 12C20 12.8284 19.3284 13.5 18.5 13.5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem className={"text-red-600"}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
