import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = () => {
  return (
    <div className="bg-light-100 dark:bg-dark-500 rounded-xl shadow-lg dark:shadow-none">
      <div className="p-4 flex gap-4 items-center">
        {/* Skeleton for the icon placeholder */}
        <span className="h-12 w-12 rounded-full flex items-center justify-center">
          <Skeleton circle height={48} width={48} />
        </span>

        {/* Skeleton for the text */}
        <div className="">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 capitalize">
            <Skeleton width={100} />
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
            <Skeleton width={60} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
