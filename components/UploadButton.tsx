import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileIcon } from "lucide-react";
export const UploadButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <FileIcon className="mr-3" />
          Add new file
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Drop your resume</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2"></div>
      </DialogContent>
    </Dialog>
  );
};
