"use client";

import { cn } from "@lib/utils";
import { StatsCardProps } from "../../types/stats-card.interface";

const StatsCard = ({
  title,
  description,
  onClick = undefined,
  cardStyles = "",
  titleStyles,
  descriptionStyles,
  horizontal = false,
  Icon,
  iconContainerClass = "bg-primary rounded-full p-5 text-white",
}: StatsCardProps) => {
  console.log(onClick);
  return (
    <div
      role={onClick ? "button" : "div"}
      onClick={onClick}
      className={cn(
        "w-full flex gap-3 rounded-xl shadow-md bg-white justify-center items-center px-5 py-3",
        horizontal ? "flex-row" : "flex-col",
        onClick ? "cursor-pointer hover:shadow-lg" : "",
        cardStyles
      )}
    >
      {Icon ? (
        <span className={`${iconContainerClass}`}>
          <Icon />
        </span>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-2 py-3 px-3 lg:px-5">
        <h1 className={cn("text-xl font-bold", titleStyles)}>{title}</h1>
        <p className={cn("text-sm", descriptionStyles)}>{description}</p>
      </div>
    </div>
  );
};

export default StatsCard;
