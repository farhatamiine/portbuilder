import { Card, CardContent } from "./ui/card";
import { truncateString } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { EventEmitter } from "stream";
import { Button } from "@/components/ui/button";

interface AddNewCardProps {
  title: string;
  description: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function AddNewCard({
  description,
  title,
  onClick: onProjectClick,
}: AddNewCardProps) {
  return (
    <Card className="w-full h-fit mb-2">
      <CardContent className="p-4 flex items-center space-x-8">
        <Button
          onClick={onProjectClick}
          variant={"ghost"}
          className="rounded-full w-14 h-14"
        >
          <PlusIcon className={"rounded-full  h-full w-full"} />
        </Button>
        <div className="">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-gray-600">
            {truncateString(description, 100)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
