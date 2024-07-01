import Header from "@/app/__components/Header";
import ImageSlider from "@/components/ImageSlider";
import Category from "./__components/Category";
import img1 from "../../public/img1.jpg";
import { StaticImageData } from "next/image";

export type Products={
  id: number;
  name: string;
  image: StaticImageData;
  alt: string;
}

const productsSample:Products[] = [
  {
    id: 1,
    name: 'Product 1',
    alt: 'test',
    image: img1,
  },
  {
    id: 2,
    name: 'Product 2',
    alt: 'test',
    image: img1,  },
  {
    id: 3,
    name: 'Product 3',
    alt: 'test',
    image: img1,  },
  {
    id: 4,
    name: 'Product 4',
    alt: 'test',
    image: img1,  },
  {
    id: 5,
    name: 'Product 5',
    alt: 'test',
    image: img1,  },
  {
    id: 6,
    name: 'Product 6',
    alt: 'test',
    image: img1,  },
  {
    id: 7,
    name: 'Product 7',
    alt: 'test',
    image: img1,  },
  {
    id: 8,
    name: 'Product 8',
    alt: 'test',
    image: img1,  },
  {
    id: 9,
    name: 'Product 9',
    alt: 'test',
    image: img1,  },
  {
    id: 10,
    name: 'Product 10',
    alt: 'test',
    image: img1,}
];

export default function Home() {
  return (
    <main className="w-[1380px] m-auto">
      <Header />
      <ImageSlider />
      <Category products={productsSample}/>
    </main>
  );
}
