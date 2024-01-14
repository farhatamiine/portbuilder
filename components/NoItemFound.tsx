import { LucideIcon } from "lucide-react";
import { HTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";

interface NoItemFoundProps {
  description: string;
  image: ReactNode;
}

export const NoItemFound = ({ description, image }: NoItemFoundProps) => {
  return (
    <div className="mx-auto w-full flex items-center justify-center flex-col mt-32 p-5">
      {image}
      <h2 className="font-medium uppercase text-xl text-slate-700">
        {description}
      </h2>
    </div>
  );
};
