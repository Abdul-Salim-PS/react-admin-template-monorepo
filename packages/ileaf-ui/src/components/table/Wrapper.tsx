"use client";
import { TableWrapperProps } from "../../types/table.interface";

const TableWrapper = ({
  children,
  isWrapperRequired = true,
  title,
  topTitleRightSlot,
  titleBottomSlot,
}: TableWrapperProps) => {
  if (!isWrapperRequired) {
    return children;
  }
  return (
    <div className="flex size-full flex-col space-y-4 rounded-[20px] bg-white p-[18px]">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div className="space-y-6">
          <h4 className="text-[1.125rem] font-semibold text-black">{title}</h4>
          <div>{titleBottomSlot}</div>
        </div>
        <div>{topTitleRightSlot}</div>
      </div>
      {children}
    </div>
  );
};

export default TableWrapper;
