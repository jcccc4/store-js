"use client";
import ImageSlider from "@/components/ImageSlider";
import { images } from "@/types/dataSample";
import { Images, Products } from "@/types/Product";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
    <aside className="relative w-full aspect-video rounded-xl border border-[#363636]">
      <figure>
        <Image
          src={src}
          alt={alt}
          height={1440}
          width={3270}
          className="rounded-xl aspect-video object-cover"
        />
        <span className="absolute left-0 top-0 w-full h-full bg-black/40 rounded-xl" />
      </figure>
      <figcaption className="absolute left-0 top-0 flex flex-col gap-8 justify-center h-full ml-4 text-white">
        <h2 className="text-xl">{description}</h2>
        <Link className="text-gray-300 hover:text-white" href={"/"}>Shop now</Link>
      </figcaption>
    </aside>
  );
}

export default function Deals({
  dealsData,
  sideDealsData,
}: {
  dealsData: Images[];
  sideDealsData: Products[];
}) {
  return (
    <section className="flex flex-col gap-4 mx-6 my-4">
      <ImageSlider data={dealsData} />
      <section className="flex flex-wrap gap-4 justify-between ">
        {sideDealsData.map((image) => (
          <SideDeals
            key={image.id}
            src={image.url}
            alt={image.alt}
            description={image.name}
          />
        ))}
      </section>
    </section>
  );
}
