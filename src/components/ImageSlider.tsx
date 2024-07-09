"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";

export default function ImageSlider({
  hasSlideSelector = false,
  isImageOnly = false,
  images,
}: {
  hasSlideSelector?: boolean;
  isImageOnly?: boolean;
  images: {
    url: StaticImageData;
    alt: string;
    title?: string;
  }[];
}) {
  const [count, setCount] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  function showNextImage() {
    if (count < 4) {
      if (slideRef.current) {
        setCount(count + 1);
        slideRef.current.style.translate = `${
          -(slideRef.current?.clientWidth + 16) * (count + 1)
        }px`;
      }
    }
  }

  function showPreviousImage() {
    if (count > 0) {
      if (slideRef.current) {
        setCount(count - 1);
        slideRef.current.style.translate = `${
          -(slideRef.current?.clientWidth + 16) * (count - 1)
        }px`;
      }
    }
  }

  function showSelectedImage(index: number) {
    setCount(index);
    if (slideRef.current) {
      slideRef.current.style.translate = `${
        -(slideRef.current?.clientWidth + 16) * index
      }px`;
    }
  }

  return (
    <div className="relative flex flex-row z-0 ">
      <div className="absolute top-0 left-0 flex justify-between items-center w-full h-full z-10 ">
        <ArrowBigLeft
          color="white"
          size={48}
          strokeWidth={1}
          className="peer"
          onClick={showPreviousImage}
        />

        <ArrowBigRight
          color="white"
          size={48}
          strokeWidth={1}
          className="peer"
          onClick={showNextImage}
        />
      </div>
      {hasSlideSelector && (
        <div className="absolute bottom-0 left-0 flex justify-center items-end w-full  z-10 py-4">
          <div className="inline-flex bg-slate-700/40 gap-2 p-2 rounded-full">
            {images.map((_, index) => (
              <div
                className={`h-2 border rounded-full bg-white ${
                  index === count
                    ? "w-12 transition-all"
                    : "w-4 hover:w-8 transition-all"
                }`}
                onClick={() => showSelectedImage(index)}
              ></div>
            ))}
          </div>
        </div>
      )}
      <div
        ref={slideRef}
        className="flex scroll-smooth gap-4 transition-translate ease-in-out delay-100 z-0"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`min-w-[calc(100%)] aspect-video transition-opacity duration-200`}
          >
            {isImageOnly ? (
              <Image
                key={index}
                src={image.url}
                alt={image.alt}
                height={1440}
                width={3270}
                className="rounded-xl aspect-video object-cover"
              />
            ) : (
              <Card>
                <figure className="">
                  <Image
                    className="w-full h-full object-cover rounded-md z-10"
                    src={image.url}
                    alt={image.alt}
                    width={1280}
                    height={400}
                  />
                </figure>
                <CardHeader>
                  <CardTitle>Monitor</CardTitle>
                </CardHeader>
              </Card>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
