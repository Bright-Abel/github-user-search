import clsx from 'clsx';

import { CardProps } from '@/lib/types';

const Card: React.FC<CardProps> = ({ type, typeValue, icon }) => {
  return (
    <div className="bg-light-100 dark:bg-dark-500 rounded-xl shadow-lg dark:shadow-none ">
      <div className="p-4 flex gap-4 items-center">
        <span
          className={clsx(
            'h-12 w-12 rounded-full  flex items-center justify-center text-[1.5rem]',
            {
              'bg-[#ffe0f0] text-[#da4a91]': type === 'repos',
              'bg-[#e0fcff] text-[#2caeba]': type === 'followers',
              'bg-[#e6e6ff] text-[#5d55fa]': type === 'following',
              'bg-[#fffbea] text-[#f0b429]': type === 'gist',
            }
          )}
        >
          {icon}
        </span>

        <div className="">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 capitalize">
            {type}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium ">
            {typeValue}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
