import { CardProps } from '@/lib/types';
import Card from './Card';
import { GoRepo } from 'react-icons/go';
import { BsFileCode } from 'react-icons/bs';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import CardSkeleton from './skeleton/CardSkeleton';

interface UserCardProps {
  following?: number;
  followers?: number;
  repos?: number;
  gist?: number;
  loading: boolean;
}
const UserCard: React.FC<UserCardProps> = ({
  followers,
  following,
  repos,
  gist,
  loading,
}) => {
  if (loading) {
    return (
      <div className="max-w-screen-lg mx-auto w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] justify-center  gap-y-4 gap-x-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }
  return (
    <div className="max-w-screen-lg mx-auto w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] justify-center  gap-y-4 gap-x-8">
      <Card type="repos" typeValue={repos} icon={<GoRepo />} />
      <Card type="followers" typeValue={followers} icon={<FiUsers />} />
      <Card type="following" typeValue={following} icon={<FiUserPlus />} />
      <Card type="gist" typeValue={gist} icon={<BsFileCode />} />
    </div>
  );
};
export default UserCard;
