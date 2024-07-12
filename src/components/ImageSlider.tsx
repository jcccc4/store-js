"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { useDotButton } from "@/hooks/useDotButton";
import { Images } from "@/types/Product";
import CategoryCard from "./CategoryCard";

export default function ImageSlider({
  data,
  isImageOnly = true,
  showSlideSelector = true,
}: {
  data: Images[];
  isImageOnly?: boolean;
  showSlideSelector?: boolean;
  numItemsDisplayed?: number;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  return (
    <div className="relative">
      <Carousel setApi={setApi} className="w-full ">
        <CarouselContent>
          {data.map((image, index) =>
            isImageOnly ? (
              <CarouselItem key={index}>
                <Image
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  height={1440}
                  width={3270}
                  className="rounded-xl aspect-video object-cover"
                />
              </CarouselItem>
            ) : (
              <CarouselItem key={index} className="basis-1/2">
                <CategoryCard
                  key={index}
                  name={image.name}
                  url={image.url}
                  alt={image.alt}
                />
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="ml-12 " />
        <CarouselNext className="mr-12 " />
      </Carousel>
      {showSlideSelector && (
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
      )}
    </div>
  );
}
