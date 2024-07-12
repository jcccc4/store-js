"use client";

import ImageSlider from "@/components/ImageSlider";
import { Products } from "@/types/Product";

export default function Category({ products }: { products: Products[] }) {
  return (
    <div className="relative mx-6 py-4  flex flex-col gap-4">
      <h1 className="text-lg font-bold">Categories</h1>
      <ImageSlider
        data={products}
        isImageOnly={false}
        showSlideSelector={false}
        numItemsDisplayed={2}
      />
    </div>
  );
}
