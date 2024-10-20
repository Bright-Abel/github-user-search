'use client';

import { BsSearch } from 'react-icons/bs';
import { IoMdMic } from 'react-icons/io';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface SearchBarProps {
  username: string | undefined;
  setUsername: (value: string) => void;
  handleSubmit: (value: React.FormEvent<HTMLFormElement>) => void;
  //   searchParams: string | undefined;
  //   setSearchParams: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  username,
  setUsername,
  handleSubmit,
}) => {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          window.location.hash = '';
          setUsername(transcript);
          if (transcript) {
            username = transcript;
            if (username?.includes(' ')) {
              username = username?.replace(' ', '-');
            }
            router.push(`/user/${username}`);
          }
        }
      };
      recognition.start();
    } else {
      alert('Speech Recognition is not supported in this browser.');
    }
  };

  const handleFocus = () => {
    window.location.hash = 'searching';
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div className="w-full max-w-screen-sm ">
      <div className="flex gap-3 items-center justify-end lg:justify-normal w-full px-2 md:px-0">
        <form
          onSubmit={handleSubmit}
          className="border items-center border-solid h-[50px] shadow-xl dark:shadow-none dark:text-[#ffffffe0] flex dark:bg-[#121212]  rounded-[40px] dark:border-[#303030] flex-1  border-gray-300"
        >
          <input
            type="text"
            className="outline-none rounded-tl-[20px] rounded-bl-[20px] dark:caret-purple-500 bg-transparent h-[50px] border-none w-full pl-4"
            value={username}
            placeholder="Search a github user"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <button
            type="submit"
            className="flex justify-center items-center p-[10px] bg-gray-400 dark:bg-[#ffffff14] dark:text-[#f1f1f1] rounded-none rounded-tr-[40px] rounded-br-[40px] w-[50px] h-[50px]"
          >
            <BsSearch className="text-2xl" />
          </button>
        </form>
        <button
          type="button"
          onClick={startListening}
          className="flex justify-center z-50 items-center p-[10px] bg-gray-300 dark:bg-[#ffffff19] w-[50px] h-[50px] rounded-[50%] "
        >
          <IoMdMic className="text-2xl" />
        </button>

        {/* <button
          type="button"
          onClick={handleFocus}
          onTouchEnd={handleFocus}
          className="flex dark:text-[#f1f1f1] md:hidden justify-center items-center"
        >
          <BsSearch className="text-2xl" />
        </button> */}
      </div>
    </div>
  );
};

export default SearchBar;
