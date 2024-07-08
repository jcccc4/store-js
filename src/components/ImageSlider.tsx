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

  function showSelectedImage(index: number) {
    setCurrentSlide(index);
  }

  return (
    <div className=" h-[312px] rounded-xl mb-4 border border-[#363636]">
      <div className="relative w-full h-full z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-200 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              className="w-full h-full object-cover rounded-xl"
              src={image.url}
              alt={image.alt}
              width={1280}
              height={400}
            />
          </div>
        ))}
        <div className="absolute top-0 left-0 flex justify-between items-center w-full h-full z-10">
          <Button onClick={showPreviousImage}>
            <ArrowBigLeft color="white" size={48} strokeWidth={1}/>
          </Button>
          <Button onClick={showNextImage}>
            <ArrowBigRight color="white" size={48} strokeWidth={1}/>
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 flex justify-center items-end w-full  z-10 py-4">
          <div className="inline-flex bg-slate-700/40 gap-2 p-2 rounded-full">
            {images.map((_, index) => (
              <div
                className={`h-2  border rounded-full bg-white ${
                  index === currentSlide ? "w-12 transition-all" : "w-4 hover:w-8 transition-all"
                }`}
                onClick={() => showSelectedImage(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
