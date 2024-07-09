import Image, { StaticImageData } from "next/image";
import React from "react";
import { Card } from "./ui/card";

type props = {
  name?: string | boolean;
  url: StaticImageData;
  alt: string;
};

export default function CategoryCard({ name, url, alt }: props) {
  console.log(Boolean(name));
  return (
    <Card className="rounded-xl min-w-[calc((100%-16px)/2)]  p-2  border border-[#363636] z-10 ">
      <div className="">
        <Image
          className="w-full h-full object-cover rounded-md z-10"
          src={url}
          alt={alt}
          width={1280}
          height={400}
        />
      </div>
      {name && (
        <hgroup className="flex justify-center items-center ">
          <h2 className="mt-2">{name}</h2>
        </hgroup>
      )}
    </Card>
  );
}
