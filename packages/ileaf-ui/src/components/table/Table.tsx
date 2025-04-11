"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TableWrapper from "./Wrapper";
import Pagination from "../pagination/Pagination";
import { cn } from "@lib/utils";
import Checkbox from "@components/form/Checkbox";
import { DataTableProps } from "../../types/table.interface";

const DataTable = <TData,>({
  data,
  columns: userColumns,
  headerClass,
  bodyClass,
  rowClass,
  showSelectCheckbox,
  onCheckBoxSelection,
  metadata,
  onNext,
  onPrev,
  ...rest
}: DataTableProps<TData>) => {
  const columnHelper = createColumnHelper<TData>();

  const handleSelection = () => {
    if (onCheckBoxSelection) {
      const selectedRows = table
        .getSelectedRowModel()
        .rows.map((row) => row.original);
      onCheckBoxSelection(selectedRows);
    }
  };

  const selectionColumn = columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="size-5 rounded-md"
        checked={table.getIsAllRowsSelected()}
        onChange={(e) => {
          table.getToggleAllRowsSelectedHandler()(e);
          setTimeout(handleSelection, 0);
        }}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="size-5 rounded-md"
        checked={row.getIsSelected()}
        onChange={(e) => {
          row.getToggleSelectedHandler()(e);
          setTimeout(handleSelection, 0);
        }}
      />
    ),
  });

  const allColumns = [...userColumns];

  if (showSelectCheckbox) {
    allColumns.unshift(selectionColumn);
  }

  const table = useReactTable({
    data,
    columns: allColumns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
  });

  return (
    <TableWrapper {...rest}>
      <div className="flex h-full flex-col overflow-hidden">
        {data && data?.length > 0 ? (
          <div className="w-full flex-1 overflow-auto rounded-[20px] border border-[#D5D5D5] bg-white">
            <table className="w-full">
              <thead className="sticky top-0 border-b border-[#D5D5D5] bg-white text-left">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className={cn(
                          "whitespace-nowrap p-5 font-medium",
                          headerClass
                        )}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="px-5">
                {table.getRowModel().rows.map((row, index) => (
                  <tr key={row.id} className={rowClass}>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className={cn(
                          "text-[#393939 ] h-[60px] whitespace-nowrap border-b border-[#D5D5D5] px-5 text-[0.875rem] font-medium",
                          bodyClass,
                          {
                            "w-5": cell.column.id === "select",
                            "border-none":
                              index === table.getRowModel().rows.length - 1,
                          }
                        )}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex h-[500px] items-center justify-center font-medium text-gray-500">
            <p>
              No records found. Please check back later or add new entries to
              see data here.
            </p>
          </div>
        )}

        {metadata ? (
          <div className="w-full flex justify-center">
            <Pagination onNext={onNext} onPrev={onPrev} metadata={metadata} />
          </div>
        ) : null}
      </div>
    </TableWrapper>
  );
};

export default DataTable;
