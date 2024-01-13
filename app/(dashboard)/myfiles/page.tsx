"use client";

// Import necessary libraries
import React from "react";
import { trpc } from "@/app/_trpc/client";
import { Ghost, Loader2 } from "lucide-react";
import { UploadButton } from "@/components/UploadButton";
import Skeleton from "react-loading-skeleton";

function Page() {
  const { data: files, isLoading } = trpc.getUserFiles.useQuery();

  return (
    <main className="mx-auto  md:p-5">
      <div className="mt-8 flex flex-col justify-center items-center">
        <div className="flex justify-between items-center w-full border-b pb-3 border-gray-200">
          <div>
            <h2 className="font-bold text-2xl text-gray-800">
              Files and assets
            </h2>
            <p className="text-gray-500">
              Files and Documents that have been uploaded to this portfolio
            </p>
          </div>
          <UploadButton />
        </div>
        {files && files.length > 0 ? (
          files.map(({ name, key, url }) => {
            return (
              <div className="" key={key}>
                {name}
              </div>
            );
          })
        ) : isLoading ? (
          <Skeleton height={100} className="my-2" count={3} />
        ) : (
          <div className="mx-auto w-full flex items-center justify-center flex-col mt-32 p-5">
            <Ghost className="w-12 h-12 text-slate-700 mb-5" />
            <h2 className="font-medium lowercase text-xl text-slate-700">
              Pretty Empty arround here
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
export default Page;
