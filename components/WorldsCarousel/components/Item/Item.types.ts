import { StaticImageData } from "next/image";
import { SetStateAction } from "react";

export type WorldsData = {
  id: number;
  icon: StaticImageData;
  name: string;
  img: StaticImageData;
  alt: string;
  pos: string;
};

export type ItemProps = {
  data: WorldsData;
  handleClick: React.Dispatch<SetStateAction<number>>;
  isActive: boolean;
};
