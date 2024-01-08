import React from "react";

import { CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ExperienceCard() {
  return (
    <Card className="w-full h-fit">
      <CardContent className="p-4">
        <Image
          alt="Project image"
          className="h-40 w-full object-cover"
          height="200"
          src="https://generated.vusercontent.net/placeholder.svg"
          style={{
            aspectRatio: "350/200",
            objectFit: "cover",
          }}
          width="350"
        />
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Airbnb clone application</h2>
          <p className="mt-1 text-sm text-gray-600">
            An Airbnb clone app is a web or mobile application that replicates
            the core features and functionality of the popular Airbnb platform.
            It allows users to browse, search for, and book accommodations such
            ...
          </p>
          <div className="flex mt-4 space-x-2">
            <Badge variant="secondary">React JS</Badge>
            <Badge variant="secondary">Next js</Badge>
            <Badge variant="secondary">Javascript</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
