import { Card, CardContent } from "./ui/card";
import { truncateString } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { EventEmitter } from "stream";
import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface AddNewCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function AddNewCard({
  description,
  title,
  children,
}: AddNewCardProps) {
  return (
    <>
      <Card className="w-full h-fit mb-2">
        <CardContent className="p-4 flex items-center space-x-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <PlusIcon className={"rounded-full  h-full w-full"} />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </DialogHeader>
              {children}
            </DialogContent>
          </Dialog>
          <div className="">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-gray-600">
              {truncateString(description, 100)}
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
