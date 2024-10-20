'use client';
import { useState, useEffect } from 'react';
import { FollowersProps } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { getFollowers } from '@/lib/action';
import FollowersSkeleton from './skeleton/FollowersSkeleton';
const Following = ({ username }: { username: string }) => {
  const [follower, setFollower] = useState<FollowersProps[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserFollowers = async () => {
      try {
        const followers = await getFollowers(username);
        setFollower(followers as FollowersProps[]);

        setLoading(false);
      } catch (err) {
        setError('Failed to load followers');
        setLoading(false);
      }
    };
    fetchUserFollowers();
  }, [username]);

  console.log('Follower', follower);
  if (loading) {
    return <FollowersSkeleton />;
  }
  if (error) {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }

  return (
    <div className='hidden md:block dark:bg-dark-500 user bg-light-100 relative text-gray-800 dark:text-gray-200 w-full  rounded-tr-md rounded-br-md rounded-bl-md shadow-xl dark:shadow-none  before:absolute before:bg-light-100 before:dark:bg-dark-500 before:top-0 before:left-0 before:transform before:-translate-y-full before:rounded-t-md before:capitalize before:px-4 before:py-2 before:tracking-wider before:text-base before:content-["Followers"]'>
      <div className="overflow-y-auto h-[260px] grid grid-rows-[repeat(auto-fill,_minmax(45px,_1fr))]] w-full gap-y-5 gap-x-4 py-4 px-8">
        {follower.map((item) => {
          const { node_id, avatar_url, login, html_url } = item;
          return (
            <article
              key={node_id}
              className="grid grid-cols-[auto_1fr_auto] gap-4 mb-4 items-center"
            >
              <Image
                src={avatar_url}
                alt="user_avatar"
                width={50}
                height={50}
                className="rounded-full h-[45px] w-[45px] object-contain"
              />
              <div className="">
                <h4 className="lg:text-xl text-lg font-bold">{login}</h4>
                <Link
                  href={html_url}
                  className="text-gray-500 dark:text-gray-400 italic"
                >
                  {html_url}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
export default Following;
