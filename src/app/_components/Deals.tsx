"use client";
import ImageSlider from "@/components/ImageSlider";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import desktop from "../../../public/desktop.jpg";
import img1 from "../../../public/img1.jpg";
import img2 from "../../../public/img2.jpg";
import img3 from "../../../public/img3.jpg";
import img4 from "../../../public/img4.jpg";
import img5 from "../../../public/img5.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const images = [
  { url: img1, alt: "Image One" },
  { url: img2, alt: "Image Two" },
  { url: img3, alt: "Image Three" },
  { url: img4, alt: "Image Fsour" },
  { url: img5, alt: "Image Five" },
];
type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};
export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

export default function Deals() {
  const [api, setApi] = React.useState<CarouselApi>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  return (
    <section className="flex flex-col w-auto mx-6 my-4">
      <div className="relative">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card>
                    <CardContent className="aspect-video p-0 rounded-xl ">
                      <Image
                        key={index}
                        src={image.url}
                        alt={image.alt}
                        height={1440}
                        width={3270}
                        className="rounded-xl aspect-video object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12 " />
          <CarouselNext className="mr-12 " />
        </Carousel>
        <div className="absolute bottom-0 left-0 flex justify-center items-end w-full gap-2 z-10 p-4">
          {scrollSnaps.map((_, index) => (
            <div
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={` h-2 rounded full bg-white transition-all
             ${index === selectedIndex ? "w-8" : "w-2"}
            `}
            />
          ))}
        </div>
      </div>

      <section className="flex flex-wrap gap-4 justify-between ">
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
    <aside className="relative w-full rounded-xl border border-[#363636]">
      <figure>
        <Image
          src={src}
          alt={alt}
          height={1440}
          width={3270}
          className="rounded-xl object-cover"
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
