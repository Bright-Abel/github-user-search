import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const FollowersSkeleton: React.FC = () => {
  return (
    <div className='hidden md:block dark:bg-dark-500 user bg-light-100 relative text-gray-800 dark:text-gray-200 w-full  rounded-tr-md rounded-br-md rounded-bl-md shadow-xl dark:shadow-none  before:absolute before:bg-light-100 before:dark:bg-dark-500 before:top-0 before:left-0 before:transform before:-translate-y-full before:rounded-t-md before:capitalize before:px-4 before:py-2 before:tracking-wider before:text-base before:content-["Followers"]'>
      <div className="overflow-y-auto h-[260px] grid grid-rows-[repeat(auto-fill,_minmax(45px,_1fr))] w-full gap-y-5 gap-x-4 py-4 px-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <article
            key={index}
            className="grid grid-cols-[auto_1fr_auto] gap-4 mb-4 items-center"
          >
            {/* Skeleton for avatar */}
            <Skeleton circle={true} height={45} width={45} />

            <div className="">
              {/* Skeleton for username */}
              <h4 className="lg:text-xl text-lg font-bold">
                <Skeleton width={100} />
              </h4>
              {/* Skeleton for URL */}
              <span className="text-gray-500 dark:text-gray-400 italic">
                <Skeleton width={150} />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FollowersSkeleton;
