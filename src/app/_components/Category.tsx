"use client";

import CategoryCard from "@/components/CategoryCard";
import React, { useRef, useState } from "react";
import img1 from "../../../public/img1.jpg";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Products } from "../page";
import { Card } from "@/components/ui/card";

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
