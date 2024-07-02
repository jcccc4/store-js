"use client";

import CategoryCard from "@/components/CategoryCard";
import React, { useRef, useState } from "react";
import img1 from "../../../public/img1.jpg";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Products } from "../page";

export default function Category({ products }: { products: Products[] }) {
  const [count, setCount] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  function showNextImage() {
    if (count >= 0 && count < 2) {
      if (slideRef.current) {
        setCount(count + 1);
        slideRef.current.style.translate = `${(count+1) * (-158.5 - 16)}px 0`;
      }
    }
  }
  function showPrevImage() {
    if (count > 0) {
      if (slideRef.current) {
        setCount(count - 1);
        slideRef.current.style.translate = `${(count - 1) * (-158.5 - 16)}px 0`;
      }
    }
  }
  return (
    <div>
      <section className="w-full relative inline-block h-[200px] m-auto no-scrollbar  overflow-x-scroll  ">
        <div
          ref={slideRef}
          className="flex absolute gap-4 left-0 transition-translate ease-in-out delay-100z-0"
        >
          <CategoryCard name={"Monitor"} url={img1} alt={""} />
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
