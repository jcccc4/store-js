"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import img1 from "../../public/img1.jpg";
import img2 from "../../public/img2.jpg";
import img3 from "../../public/img3.jpg";
import img4 from "../../public/img4.jpg";
import img5 from "../../public/img5.jpg";
import { Button } from "./ui/button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const images = [
  { url: img1, alt: "Image One" },
  { url: img2, alt: "Image Two" },
  { url: img3, alt: "Image Three" },
  { url: img4, alt: "Image Four" },
  { url: img5, alt: "Image Five" },
];

export default function ImageSlider() {
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
        console.log(count);
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
      <div className="absolute bottom-0 left-0 flex justify-center items-end w-full  z-10 py-4">
        <div className="inline-flex bg-slate-700/40 gap-2 p-2 rounded-full">
          {images.map((_, index) => (
            <div
              className={`h-2  border rounded-full bg-white ${
                index === count
                  ? "w-12 transition-all"
                  : "w-4 hover:w-8 transition-all"
              }`}
              onClick={() => showSelectedImage(index)}
            ></div>
          ))}
        </div>
      </div>
      <div
        ref={slideRef}
        className="flex scroll-smooth gap-4 transition-translate ease-in-out delay-100 z-0"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`min-w-[calc(100%)] aspect-video transition-opacity duration-200s`}
          >
            <Image
              className="aspect-video object-cover rounded-xl"
              src={image.url}
              alt={image.alt}
              width={1280}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="absolute top-0 left-0 flex justify-between items-center w-full h-full z-10">
          <Button onClick={showPreviousImage}>
            <ArrowBigLeft color="white" size={48} strokeWidth={1} />
          </Button>
          <Button onClick={showNextImage}>
            <ArrowBigRight color="white" size={48} strokeWidth={1} />
          </Button>
        </div> <div className="absolute bottom-0 left-0 flex justify-center items-end w-full  z-10 py-4">;
          <div className="inline-flex bg-slate-700/40 gap-2 p-2 rounded-full">
            {images.map((_, index) => (
              <div
                className={`h-2  border rounded-full bg-white ${
                  index === currentSlide
                    ? "w-12 transition-all"
                    : "w-4 hover:w-8 transition-all"
                }`}
                onClick={() => showSelectedImage(index)}
              ></div>
            ))}
          </div> 
        </div>*/
}
