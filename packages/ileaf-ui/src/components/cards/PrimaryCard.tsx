"use client";

import { PrimaryCardProps } from "../../types/primary-card.interface";
import { cn } from "../../lib/utils";

const PrimaryCard = ({
  title,
  description,
  link,
  onClick,
  image,
  imageAlt = "item",
  imageStyles = "",
  cardStyles = "",
  titleStyles,
  descriptionStyles,
  listItems = [],
  horizontal = false,
  children,
}: PrimaryCardProps) => {
  return (
    <div
      role={onClick ? "button" : "div"}
      onClick={onClick}
      className={cn(
        "min-w-xs w-full flex gap-3 rounded-md shadow-md",
        horizontal ? "flex-row" : "flex-col",
        onClick ? "cursor-pointer hover:shadow-lg" : "",
        cardStyles
      )}
    >
      {image ? (
        <div className="h-48 w-full rounded-t-md">
          <img
            src={image}
            alt={imageAlt}
            className={cn("w-full h-full object-cover", imageStyles)}
          />
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-2 py-3 px-3 lg:px-5">
        {link ? (
          <a href={link} className="hover:underline">
            <h1 className={cn("text-xl font-bold", titleStyles)}>{title}</h1>
          </a>
        ) : (
          <h1 className={cn("text-xl font-bold", titleStyles)}>{title}</h1>
        )}
        <p className={cn("text-sm", descriptionStyles)}>{description}</p>
        {listItems.length > 0 && (
          <ul className="mt-2">
            {listItems.map((item, index) => (
              <li
                key={item.key || index}
                className="flex items-center justify-between gap-2"
              >
                <div className="flex gap-x-2 items-center">
                  {item.icon && <item.icon />}
                  <span>{item?.key}</span>
                </div>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default PrimaryCard;
