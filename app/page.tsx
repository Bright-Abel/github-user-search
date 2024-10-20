'use client';

import SearchBar from '@/components/SearchBar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { userList } from '@/mockData/data-json';
import { RiShareBoxLine } from 'react-icons/ri';

const Page = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string | undefined>('');

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1200,
      // easing: 'ease-in-sine',
      anchorPlacement: 'center-bottom',
    });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.hash = '';
    if (username) {
      if (username.includes(' ')) {
        username.replace(' ', '-');
      }
      router.push(`/user/${username}`);
      setUsername(undefined);
    }
  };

  const handleClick = (userName: string) => {
    if (userName) {
      if (userName.includes(' ')) {
        userName.replace(' ', '-');
      }
      router.push(`/user/${userName}`);
      setUsername(undefined);
    }
  };

  return (
    <div className="max-h-[calc(100vh-64px)] min-h-[calc(100vh-64px)] w-full flex justify-center items-center">
      <div
        className="bg-[#f1f5f8] py-4 max-w-screen-md w-full h-[40vh] rounded-xl flex flex-col shadow-xl dark:shadow-none dark:text-[#ffffffe0] dark:bg-dark-500"
        data-aos="flip-up"
        data-aos-delay="400" // Add AOS animation effect here
      >
        <section
          className="w-full px-4 dark:text-light-100 text-dark-500"
          data-aos="fade-right" // Another AOS effect for the section
          data-aos-delay="800"
        >
          <h2 className="text-xl lg:text-2xl xl:text-4xl font-bold">
            Hey there 👋
          </h2>
          <p className="text-lg lg:text-xl">Search for a github user</p>
        </section>
        <div
          className="flex w-full h-full flex-col justify-center items-center"
          data-aos="zoom-in" // Zoom-in effect for the SearchBar container
          data-aos-delay="600"
        >
          <SearchBar
            username={username}
            setUsername={setUsername}
            handleSubmit={handleSubmit}
          />
          <div className="flex gap-2 md:-ml-16 flex-wrap px-2">
            {userList.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleClick(item)}
                className="dark:bg-[#ffffff19] relative bg-gray-300 text-gray-900 hover:opacity-80 ease duration-500 shadow-lg dark:shadow-none dark:text-light-100 capitalize py-1 px-2 md:py-3 rounded-lg mt-2 whitespace-nowrap "
              >
                {item}
                <RiShareBoxLine className="absolute hidden md:block text-sm right-0 top-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
