import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface PrimaryCardProps {
  title?: string;
  description?: string;
  link?: string;
  onClick?: () => void;
  image?: string;
  imageAlt?: string;
  imageStyles?: string;
  cardStyles?: string;
  titleStyles?: string;
  descriptionStyles?: string;
  listItems?: {
    key?: string;
    value?: string | number | boolean;
    icon?: IconType;
  }[];
  horizontal?: boolean;
  children: ReactNode;
}
