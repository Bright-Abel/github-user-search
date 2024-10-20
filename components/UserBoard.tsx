import Image from 'next/image';
import Link from 'next/link';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import { UserProps } from '@/lib/types';
import UserBoardSkeleton from './skeleton/UserBoardSkeleton';

interface UserBoardProps {
  user: UserProps | null;
  loading: boolean;
}

const UserBoard: React.FC<UserBoardProps> = ({ user, loading }) => {
  if (loading) {
    return <UserBoardSkeleton />;
  }
  if (!user) {
    return (
      <div
        className={
          'dark:bg-dark-500 user bg-light-200 relative text-gray-800 dark:text-gray-200 w-full py-6 px-8 rounded-tr-md rounded-br-md rounded-bl-md shadow-xl dark:shadow-none  before:absolute before:bg-light-200 before:dark:bg-dark-500 before:top-0 before:left-0 before:transform before:-translate-y-full before:rounded-t-md before:capitalize before:px-4 before:py-2 before:tracking-wider before:text-base before:content-["user"] flex items-center justify-center text-xl md:text-2xl font-bold'
        }
      >
        No user found
      </div>
    );
  }

  const {
    avatar_url,
    name,

    company,
    location,
    blog,
    twitter_username,
    html_url,
    bio,
  } = user;
  return (
    <div
      className={
        'dark:bg-dark-500 user bg-light-200 relative text-gray-800 dark:text-gray-200 w-full py-6 px-8 rounded-tr-md rounded-br-md rounded-bl-md shadow-xl dark:shadow-none  before:absolute before:bg-light-200 before:dark:bg-dark-500 before:top-0 before:left-0 before:transform before:-translate-y-full before:rounded-t-md before:capitalize before:px-4 before:py-2 before:tracking-wider before:text-base before:content-["user"]'
      }
    >
      <header className="grid grid-cols-[auto_1fr_auto] gap-4 mb-4 items-center">
        <Image
          src={avatar_url}
          alt="user_avatar"
          width={50}
          height={50}
          className="rounded-full h-[75px] w-[75px] object-contain"
        />
        <span className=" flex flex-col">
          <h4 className="text-xl font-bold">{name}</h4>
          <p className="text-gray-500 dark:text-gray-400 italic">
            @{twitter_username || 'N/A'}
          </p>
        </span>

        <Link
          href={html_url}
          className="border cursor-pointer border-solid border-[#2caeba] py-1 px-3 rounded-[16px] text-[#2caeba] transistion-all duration-700 ease-linear hover:bg-[#2caeba] hover:text-[#fff]"
        >
          View Profile
        </Link>
      </header>
      <h4 className="mb-4 text-gray-500 dark:text-light-100 font-semibold text-xl">
        {bio || 'No Bio'}
      </h4>
      <div className="dark:text-[#e0fcff] text-lg lg:text-xl">
        <span className="flex items-center gap-2">
          <MdBusiness />
          <p className="">{company || 'N/A'}</p>
        </span>
        <span className="flex items-center gap-2">
          <MdLocationOn />
          <p className="">{location || 'N/A'}</p>
        </span>
        <span className="flex items-center gap-2">
          <MdLink />
          <p className="">{blog || 'N/A'}</p>
        </span>
      </div>
    </div>
  );
};

export default UserBoard;
