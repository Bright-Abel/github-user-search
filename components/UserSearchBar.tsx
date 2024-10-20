'use client';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
const UserSearchBar = () => {
  const [username, setUsername] = useState<string>('');
  return (
    <div className="max-w-screen-sm mx-auto w-full">
      <form className="border border-solid h-[40px] hidden justify-between  dark:text-[#ffffffe0] md:flex dark:bg-[#121212] rounded-[40px] dark:border-[#303030]   border-gray-300 w-full transition-all duration-700 ease-linear ">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="outline-none flex-1 rounded-tl-[20px] rounded-bl-[20px] dark:caret-purple-500 bg-transparent h-full border-none pl-2"
          placeholder="Search user"
        />

        <button
          type="submit"
          className="flex justify-center items-center p-[10px] dark:bg-[#ffffff14] bg-gray-400 dark:text-[#f1f1f1]  rounded-tr-[40px] rounded-br-[40px] w-[40px] h-[40px]"
        >
          <BsSearch className="text-2xl" />
        </button>
      </form>
      
    </div>
  );
};
export default UserSearchBar;
