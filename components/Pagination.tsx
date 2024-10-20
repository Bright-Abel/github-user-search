'use client';
import clsx from 'clsx';
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setPage,
}) => {
  return (
    <div className="md:flex hidden">
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={index}
            className={clsx(
              'px-3 py-1 border',
              pageNumber === currentPage
                ? 'bg-blue-500 text-white'
                : 'text-blue-500',
              pageNumber === 1 && 'rounded-tl-md rounded-bl-md',
              pageNumber === totalPages && 'rounded-tr-md rounded-br-md'
            )}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};
export default Pagination;
