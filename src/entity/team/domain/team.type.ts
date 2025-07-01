import { StaticImageData } from "next/image";

export type TeamItem = {
  firstName: string;
  lastName: string;
  fatherName: string;
  photo: StaticImageData;
  position: string;
  specialization: string;
  expirience: string;
  regalies: string;
};
