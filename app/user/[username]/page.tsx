/* prettier-ignore-file */
'use client';
import { getUsers } from '@/lib/action';
import { HeadersProps, SearchParamProps, UserProps } from '@/lib/types';
import { useEffect, useState } from 'react';

import UserCard from '@/components/UserCard';
import UserBoard from '@/components/UserBoard';
import Following from '@/components/Following';
import Repositories from '@/components/Repositories';
import UserLimit from '@/components/UserLimit';
import Error from '@/components/Error';

const UserPage = ({ params: { username } }: SearchParamProps) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [headers, setHeaders] = useState<HeadersProps | null>(null);

  useEffect(() => {
    setLoading(true);

    const fetchUser = async () => {
      try {
        const newUser = await getUsers(username);

        if (newUser && newUser.data) {
          setUser(newUser.data as UserProps);
          setHeaders(newUser.headers as HeadersProps);
        } else {
          setError('User not found');
        }
        setLoading(false);
      } catch {
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };

    if (username) {
      fetchUser();
    }
  }, [username]);


  if (!loading && user == null) {
    return (
      <Error
        errorTitle={'NO USER FOUND'}
        subTitle={'Please search for a new user'}
        imageLink={'/assets/svgs/repo-error.svg'}
        link={true}
      />
    );
  }

  if (!loading && Number(headers?.['x-ratelimit-remaining'] || '0') <= 1) {
    return (
      <Error
        errorTitle={'You Ran Out of Request'}
        subTitle={'OOOOOPS!! No more requests left'}
        imageLink={'/assets/svgs/repo-error.svg'}
        link={true}
      />
    );
  }

  if (error) {
    return (
      <Error
        errorTitle={error}
        subTitle={'OOOOOPS!! There was an error!!'}
        imageLink={'/assets/svgs/repo-error.svg'}
        link={true}
      />
    );
  }
  return (
    <div className="mt-14 px-2 xl:px-8 w-full flex flex-col gap-8">
      { /* prettier-ignore */}
      <UserLimit limit={headers?.['x-ratelimit-remaining']} total= {headers?.['x-ratelimit-limit']}loading={loading} />
      <UserCard
        following={user?.following}
        followers={user?.followers}
        repos={user?.public_repos}
        gist={user?.public_gists}
        loading={loading}
      />
      <div className="w-full mt-14 flex flex-col gap-14">
        <div className="grid gap-y-20 gap-x-12 lg:grid-cols-2 grid-cols-1">
          <UserBoard user={user} loading={loading} />
          <Following username={user?.login} />
        </div>
        <Repositories username={user?.login} />
      </div>
    </div>
  );
};
export default UserPage;
