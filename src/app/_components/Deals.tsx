import ImageSlider from "@/components/ImageSlider";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import desktop from "../../../public/desktop.jpg";
import laptop from "../../../public/laptop.jpg";

export default function Deals() {
  return (
    <section className="flex flex-col w-auto mx-6">
      <ImageSlider />
      <section className="flex flex-wrap gap-4">
        <SideDeals
          src={desktop}
          alt={"Image of a Desktop"}
          description={"Desktop"}
        />
        <SideDeals
          src={desktop}
          alt={"Image of a Desktop"}
          description={"Desktop"}
        />
        <SideDeals
          src={desktop}
          alt={"Image of a Desktop"}
          description={"Desktop"}
        />
      </section>
    </section>
  );
}

function SideDeals({
  src,
  alt,
  description,
}: {
  src: StaticImageData;
  alt: string;
  description: string;
}) {
  return (
    <aside className="relative w-[329px] bg-red-700 rounded-xl">
      <figure>
        <Image
          src={src}
          alt={alt}
          height={1440}
          width={3270}
          className="rounded-xl max-h-[144px] object-cover"
        />
        <span className="absolute left-0 top-0 w-full h-full bg-black/40 rounded-xl" />
      </figure>
      <figcaption className="absolute left-0 top-0 flex flex-col gap-4 justify-center h-full ml-4 text-white">
        <h2 className="text-2xl">{description}</h2>
        <Link href={"/"}>Shop now</Link>
      </figcaption>
    </aside>
  );
}
