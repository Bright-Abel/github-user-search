import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const RepositoriesSkeleton = () => {
  return (
    <div className="border border-solid border-gray-600 dark:border-dark-500 rounded-xl">
      {/* Header Skeleton */}
      <div className="bg-slate-300 dark:bg-dark-600 text-gray-800 dark:text-gray-200 w-full py-6 px-6 flex justify-between items-center rounded-t-xl">
        <h2 className="capitalize text-lg xl:text-xl font-semibold">
          <Skeleton width={200} />
        </h2>
      </div>

      {/* Repositories List Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-3 md:px-6 w-full gap-y-5 gap-x-4 py-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="bg-light-400 dark:bg-dark-500 rounded-xl shadow-lg duration-500 dark:shadow-none"
          >
            <div className="p-4 flex gap-4 items-start justify-between">
              <span className="">
                {/* Skeleton for repository name */}
                <h2 className="text-lg md:text-2xl font-bold text-gray-800 dark:text-gray-200">
                  <Skeleton width={150} />
                </h2>
                {/* Skeleton for repository description */}
                <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 font-medium">
                  <Skeleton count={2} />
                </p>
              </span>

              {/* Skeleton for stars and forks */}
              <div className="flex gap-2 md:gap-4 text-sm md:text-lg items-center h-8 border border-solid border-gray-400 rounded-lg w-fit px-2 md:px-4">
                <span className="flex gap-1 md:gap-2 items-center text-gray-800 dark:text-gray-500">
                  <Skeleton width={50} />
                </span>
                <div className="h-full w-[1px] bg-gray-400" />
                <span className="flex gap-1 md:gap-2 items-center text-gray-800 dark:text-gray-500">
                  <Skeleton width={50} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositoriesSkeleton;
