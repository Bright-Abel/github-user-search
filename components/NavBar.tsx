import { FaGithub } from 'react-icons/fa6';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
const NavBar = () => {
  return (
    <div className="w-full h-16 flex justify-between shadow-xl dark:shadow-none px-2 md:px-4 items-center lg:px-8 bg-[#f1f5f8] dark:bg-dark-500">
      <Link
        href="/"
        className="flex items-center gap-1 text-2xl font-semibold cursor-pointer"
      >
        <FaGithub />
        <h1 className="">
          GiT<span className="text-purple-700">HuB</span>
        </h1>
      </Link>
      <ThemeToggle />
    </div>
  );
};
export default NavBar;
