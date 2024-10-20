import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const UserBoardSkeleton = () => {
  return (
    <div className='dark:bg-dark-500 user bg-light-200 relative text-gray-800 dark:text-gray-200 w-full py-6 px-8 rounded-tr-md rounded-br-md rounded-bl-md shadow-xl dark:shadow-none  before:absolute before:bg-light-200 before:dark:bg-dark-500 before:top-0 before:left-0 before:transform before:-translate-y-full before:rounded-t-md before:capitalize before:px-4 before:py-2 before:tracking-wider before:text-base before:content-["user"]'>
      <header className="grid grid-cols-[auto_1fr_auto] gap-4 mb-4 items-center">
        {/* Skeleton for user avatar */}
        <Skeleton circle height={75} width={75} />

        <span className="flex flex-col">
          {/* Skeleton for user name */}
          <Skeleton width={150} height={24} className="mb-2" />
          {/* Skeleton for Twitter username */}
          <Skeleton width={100} height={16} />
        </span>

        {/* Skeleton for the button */}
        <Skeleton height={32} width={100} className="rounded-[16px]" />
      </header>

      {/* Skeleton for bio */}
      <Skeleton height={20} width={300} className="mb-4" />

      <div className="dark:text-[#e0fcff] text-lg lg:text-xl">
        {/* Skeleton for company */}
        <span className="flex items-center gap-2">
          <Skeleton width={80} height={16} />
        </span>
        {/* Skeleton for location */}
        <span className="flex items-center gap-2">
          <Skeleton width={80} height={16} />
        </span>
        {/* Skeleton for blog */}
        <span className="flex items-center gap-2">
          <Skeleton width={80} height={16} />
        </span>
      </div>
    </div>
  );
};
export default UserBoardSkeleton;
