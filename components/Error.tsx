'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

interface ErrorProps {
  errorTitle: string;
  subTitle?: string;
  imageLink: string;
  link?: boolean;
}

const Error: React.FC<ErrorProps> = ({
  errorTitle,
  subTitle,
  imageLink,
  link,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      // easing: 'ease-in-sine',
      anchorPlacement: 'center-bottom',
    });
  }, []);

  return (
    <main className="grid place-items-center min-h-[100vh] px-8">
      <div className="text-center">
        <Image
          src={imageLink}
          alt=""
          width={500}
          height={500}
          className="w-1/2 mx-auto"
          data-aos="zoom-in"
          data-aos-delay="400"
        />
        <h1
          className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl"
          data-aos="zoom-in-right"
          data-aos-delay="400"
        >
          {errorTitle}
        </h1>
        {subTitle && (
          <p
            className="mt-6 text-lg leading-7 "
            data-aos="zoom-in-left"
            data-aos-delay="400"
          >
            {subTitle}
            {/*  */}
          </p>
        )}

        {link && (
          <div className="mt-10 ">
            <Link
              href="/"
              className="border border-solid border-teal-500 px-4 py-2 rounded-lg text-emerald-500 buttonNew"
            >
              Go back home
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default Error;
