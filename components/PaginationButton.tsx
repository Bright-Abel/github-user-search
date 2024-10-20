import Pagination from './Pagination';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

interface PaginationButtonProps {
  lastPage: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  lastPage,
  page,
  setPage,
  handleNextPage,
  handlePreviousPage,
}) => {
  return (
    <>
      {lastPage >= 2 && (
        <div className="flex justify-between items-center mb-8 mt-4 gap-4">
          <button
            type="button"
            aria-label="Previous Page"
            onClick={handlePreviousPage}
            disabled={page <= 1}
            className="flex gap-2 items-center cursor-pointer p-2 bg-dark-500 text-light-100 hover:opacity-80 transition-all duration-700 ease rounded-lg"
          >
            <FaArrowLeft className="text-purple-500 font-bold" />
            <p className="">Prev</p>
          </button>

          <span className="flex flex-col items-center gap-4">
            <p className="font-bold">
              Page {page} of {lastPage || '...'}
            </p>

            <Pagination
              currentPage={page}
              totalPages={lastPage}
              setPage={setPage}
            />
          </span>

          <button
            type="button"
            aria-label="Next Page"
            onClick={handleNextPage}
            disabled={lastPage ? page >= lastPage : false}
            className="flex gap-2 items-center p-2 bg-dark-500 cursor-pointer text-light-100 hover:opacity-80 transition-all duration-700 ease rounded-lg"
          >
            <p className="">Next</p>
            <FaArrowRight className="text-purple-500 font-bold" />
          </button>
        </div>
      )}
    </>
  );
};
export default PaginationButton;
