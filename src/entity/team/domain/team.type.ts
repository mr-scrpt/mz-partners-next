import { StaticImageData } from "next/image";

export type TeamItem = {
  firstName: string;
  lastName: string;
  photo: StaticImageData;
  position: string;
  description: string;
};
