'use client';

import Skeleton from 'react-loading-skeleton';

interface UserLimitProps {
  limit: string | undefined;
  total: string | undefined;
  loading: boolean;
}
const UserLimit: React.FC<UserLimitProps> = ({ limit, total, loading }) => {
  if (loading) {
    return <Skeleton height={30} width={400} />;
  }
  return (
    <div className="capitalize text-bold text-xl lg:text-2xl xl:text-4xl">
      requests : {limit} / {total}
    </div>
  );
};
export default UserLimit;
