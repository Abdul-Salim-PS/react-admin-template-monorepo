import { ColumnDef } from "@tanstack/react-table";
import { Metadata } from "./pagination.interface";

export interface TableWrapperProps {
  children: React.ReactNode;
  isWrapperRequired?: boolean;
  title?: string;
  topTitleRightSlot?: React.ReactNode;
  titleBottomSlot?: React.ReactNode;
}

export type PassableTableWrapperProps = Omit<TableWrapperProps, "children">;

export interface DataTableProps<TData> extends PassableTableWrapperProps {
  data: TData[] | [];
  columns: ColumnDef<TData, any>[];
  pageSize?: number;
  headerClass?: string;
  bodyClass?: string;
  rowClass?: string;
  showSelectCheckbox?: boolean;
  onCheckBoxSelection?: (selectedRows: TData[]) => void;
  metadata?: Metadata;
  onNext: (page: number) => void;
  onPrev: (page: number) => void;
}
