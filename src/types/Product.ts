import { StaticImageData } from "next/image";

export type Images = {
  id: number;
  url: StaticImageData;
  alt: string;
  name?: string;
};

export type Products = Images & {
  name: string;
};
