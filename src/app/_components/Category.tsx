"use client";

import CategoryCard from "@/components/CategoryCard";
import React, { useRef, useState } from "react";
import img1 from "../../../public/img1.jpg";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Products } from "../page";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Image from "next/image";

const productsSample:Products[] = [
  {
    id: 1,
    name: 'Product 1',
    alt: 'test',
    url: img1,
  },
  {
    id: 2,
    name: 'Product 2',
    alt: 'test',
    url: img1,  },
  {
    id: 3,
    name: 'Product 3',
    alt: 'test',
    url: img1,  },
  {
    id: 4,
    name: 'Product 4',
    alt: 'test',
    url: img1,  },
  {
    id: 5,
    name: 'Product 5',
    alt: 'test',
    url: img1,  },
  {
    id: 6,
    name: 'Product 6',
    alt: 'test',
    url: img1,  },
  {
    id: 7,
    name: 'Product 7',
    alt: 'test',
    url: img1,  },
  {
    id: 8,
    name: 'Product 8',
    alt: 'test',
    url: img1,  },
  {
    id: 9,
    name: 'Product 9',
    alt: 'test',
    url: img1,  },
  {
    id: 10,
    name: 'Product 10',
    alt: 'test',
    url: img1,}
];

export default function Category({ products }: { products: Products[] }) {
  const [count, setCount] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  function showNextImage() {
    if (count < 8) {
      if (slideRef.current) {
        setCount(count + 1);
        slideRef.current.style.translate = `${
          (-(slideRef.current?.clientWidth + 16) / 2) * (count + 1)
        }px`;
      }
    }
  }
  function showPrevImage() {
    if (count > 0) {
      if (slideRef.current) {

        setCount(count - 1);
        slideRef.current.style.translate = `${
          (-(slideRef.current?.clientWidth + 16) / 2) * (count - 1)
        }px`;
      }
    }
  }
  return (
    <div className="relative mx-6 py-4  flex flex-col gap-4">
      <h1>Categories</h1>
      <Carousel className="w-full">
          <CarouselContent>
            {productsSample.map((image, index) => (
              <CarouselItem className={"basis-1/2"} key={index}>
                <Card>
                  <CardContent className=" aspect-video p-0 rounded-xl ">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12 " />
          <CarouselNext className="mr-12 " />
        </Carousel>
      <section className="w-full overflow-hidden">
        <div
          ref={slideRef}
          className="flex scroll-smooth gap-4 transition-translate ease-in-out delay-100 z-0"
        >
          <CategoryCard  url={img1} alt={""} />
          <CategoryCard name={"Monitor"} url={img1} alt={""} />
          <CategoryCard name={"Monitor"} url={img1} alt={""} />
          <CategoryCard name={"Monitor"} url={img1} alt={""} />
          <CategoryCard name={"Monitor"} url={img1} alt={""} />
          <CategoryCard name={"Monitor"} url={img1} alt={""} />
          <CategoryCard name={"Monitor"} url={img1} alt={""} />
          <CategoryCard name={"Monitor"} url={img1} alt={""} />
          <CategoryCard name={"Monitor"} url={img1} alt={""} />
          <CategoryCard name={"Monitor"} url={img1} alt={""} />
        </div>
        <div className="absolute top-0 left-0 flex justify-between items-center w-full h-full z-10">
          <Button
            onClick={showPrevImage}
            size="sm"
            className="absolute left-0 top-1/2"
          >
            <ArrowBigLeft color="red" />
          </Button>
          <Button
            onClick={showNextImage}
            size="sm"
            className="absolute right-0 top-1/2 z-20"
          >
            <ArrowBigRight color="red" />
          </Button>
        </div>
      </section>
    </div>
  );
}
