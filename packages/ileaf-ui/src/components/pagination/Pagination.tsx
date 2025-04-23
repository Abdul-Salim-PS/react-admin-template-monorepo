"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { Metadata } from "../../types/pagination.interface";
import { cn } from "../../lib/utils";

interface PaginationProps {
  metadata: Metadata;
  onNext: (page: number) => void;
  onPrev: (page: number) => void;
}

const Pagination = ({ metadata, onNext, onPrev }: PaginationProps) => {
  const { total, page, size } = metadata;
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(total / size);
  if (totalPages <= 1) return null;

  const setCurrentPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
  };

  // Generate page numbers to display (up to 3)
  const getPageNumbers = () => {
    const pageNumbers = [];

    // If there are 3 or fewer pages, show all pages
    if (totalPages <= 3) {
      for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // For more than 3 pages, show current page and adjacent pages
      if (page === 0) {
        // If on first page, show first 3 pages
        pageNumbers.push(0, 1, 2);
      } else if (page === totalPages - 1) {
        // If on last page, show last 3 pages
        pageNumbers.push(totalPages - 3, totalPages - 2, totalPages - 1);
      } else {
        // Otherwise show current page and adjacent pages
        pageNumbers.push(page - 1, page, page + 1);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="my-2 w-fit rounded-[20px] bg-white p-4">
      <div className="flex items-center gap-4 text-gray-500">
        <button
          className="cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
          disabled={page === 0}
          onClick={() => {
            const prevPage = page - 1;
            setCurrentPage(prevPage);
            onPrev(prevPage);
          }}
        >
          <FaChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-2">
          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
                pageNum === page
                  ? "border-2 border-primary text-primary"
                  : "hover:border-gray-100 bg-gray-100"
              )}
              onClick={() => {
                if (pageNum !== page) {
                  setCurrentPage(pageNum);
                  if (pageNum > page) {
                    onNext(pageNum);
                  } else {
                    onPrev(pageNum);
                  }
                }
              }}
            >
              {pageNum + 1}
            </button>
          ))}
        </div>

        <button
          className="cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
          disabled={page === totalPages - 1}
          onClick={() => {
            const nextPage = page + 1;
            setCurrentPage(nextPage);
            onNext(nextPage);
          }}
        >
          <FaChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
