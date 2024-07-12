import Category from "@/app/_components/Category";

import Deals from "@/app/_components/Deals";
import { images, imagesDeals, productsSample } from "@/types/dataSample";

export default function Home() {
  return (
    <main>
      <Deals dealsData={images} sideDealsData={imagesDeals} />
      <Category products={productsSample} />
    </main>
  );
}
