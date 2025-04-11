import React from "react";

export interface StatsCardProps {
  title?: string;
  description?: string;
  onClick?: () => void | undefined;
  Icon?: React.ElementType;
  iconSize: string | number;
  cardStyles?: string;
  titleStyles?: string;
  descriptionStyles?: string;
  horizontal?: boolean;
  iconContainerClass?: string;
}
