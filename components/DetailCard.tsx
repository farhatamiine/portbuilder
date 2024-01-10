import React from "react";

import {CardContent, Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Image from "next/image";
import {truncateString} from "@/lib/utils";

interface DetailCardProps {
    title: string,
    image: string | null,
    description: string,
    badges: string[],
}

export default function DetailCard({badges, description, title, image}: DetailCardProps) {
    const finalImage = image || "https://generated.vusercontent.net/placeholder.svg";

    return (
        <Card className="w-full h-fit mb-2">
            <CardContent className="p-4 flex md:flex-row flex-col">
                <Image
                    alt="Project image"
                    className="h-40 md:w-1/2 w-full border object-cover mr-5 rounded"
                    height="200"
                    src={finalImage}
                    style={{
                        aspectRatio: "350/200",
                        objectFit: "cover",
                    }}
                    width="350"
                />
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="mt-1 text-sm text-gray-600">
                        {truncateString(description, 100)}

                    </p>
                    <div className="flex mt-4 space-x-2">
                        {
                            badges.map((badge, index) => {
                                return (
                                    <Badge key={index} variant="secondary">{badge}</Badge>
                                )
                            })
                        }
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
