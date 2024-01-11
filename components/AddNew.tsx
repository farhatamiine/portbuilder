import {Card, CardContent} from "./ui/card"
import {truncateString} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import React from "react";
import {PlusIcon} from "lucide-react";
import Link from "next/link";

interface AddNewCardProps {
    title: string,
    description: string,
    link: string
}

export default function AddNewCard({description, title, link}: AddNewCardProps) {
    return (
        <Card className="w-full h-fit mb-2">
            <CardContent className="p-4 flex items-center space-x-8">
                <Link
                    className={"rounded-full w-10 h-10 flex items-center justify-center border"}
                    href={link}
                >
                    <PlusIcon/>
                </Link>
                <div className="">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="mt-1 text-sm text-gray-600">
                        {truncateString(description, 100)}

                    </p>
                </div>
            </CardContent>
        </Card>
    )

}