import Image, { StaticImageData } from "next/image";
import React from "react";

type props = {
  name: string;
  url: StaticImageData;
  alt: string;
};

export default function CategoryCard({ name, url, alt }: props) {
  return (
    <section className="rounded-xl min-w-[calc((100%-16px)/2)]  p-2  border border-[#363636] z-10 ">
      <figure className="" >
        <Image
          className="w-full h-full object-cover rounded-md z-10"
          src={url}
          alt={alt}
          width={1280}
          height={400}
        />
      </figure>
      <hgroup className="h-10 flex justify-center items-center ">
        <h2>{name}</h2>
      </hgroup>
    </section>
  );
}
