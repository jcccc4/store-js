import Image, { StaticImageData } from "next/image";
import React from "react";

type props = {
  name: string;
  url: StaticImageData;
  alt: string;
};

export default function CategoryCard({ name, url, alt }: props) {
  return (
    <section className="rounded-xl w-[158.5px] h-[160px]  bg-slate-200 z-10 ">
      <figure className="h-[160px] " >
        <Image
          className="w-full h-full object-cover rounded-t-xl z-10"
          src={url}
          alt={alt}
          width={1280}
          height={400}
        />
      </figure>
      <hgroup className="h-10 flex justify-center items-center">
        <h2>{name}</h2>
      </hgroup>
    </section>
  );
}
