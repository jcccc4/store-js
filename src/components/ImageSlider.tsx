"use client";

import { useState } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  function showNextImage() {
    setCurrentSlide((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }
  function showPreviousImage() {
    setCurrentSlide((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }
  return (
    <div className="w-full h-400">
      <div className="relative  ">
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
        <div >
          <Image
            className="w-full h-[400px] object-cover"
            src={images[currentSlide].url}
            alt={images[currentSlide].alt}
            width={1280}
            height={400}
          />
        </div>
        <div className="absolute top-0 left-0 flex justify-between items-center w-full h-full">
          <Button onClick={showPreviousImage}>
            <ArrowBigLeft color="white" size={64} />
          </Button>
          <Button onClick={showNextImage}>
            <ArrowBigRight color="white" size={64} />
          </Button>
        </div>
      </div>
    </div>
  );
}
