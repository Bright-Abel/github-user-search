'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ReposProps } from '@/lib/types';
import { IoStarOutline } from 'react-icons/io5';
import { BiGitRepoForked } from 'react-icons/bi';

import {
  getRepositoriesWithPagination,
  getLastPageNumberFromUrl,
} from '@/lib/action';

import RepositoriesSkeleton from './skeleton/RepositoriesSkeleton';
import Error from './Error';
import PaginationButton from './PaginationButton';

const Repositories = ({ username }: { username: string }) => {
  if (username.includes('%20')) {
    username = username.replace('%20', '-');
  }
  const [repos, setRepos] = useState<ReposProps[]>([]); // Only the required fields are typed
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [lastPage, setLastPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const { data, paginationInfo } = await getRepositoriesWithPagination(
          username,
          page
        );

        if (Array.isArray(data)) {
          // Map the data to extract only the needed fields
          const filteredRepos = data.map((repo: any) => ({
            name: repo.name,
            node_id: repo.node_id,
            html_url: repo.html_url,
            description: repo.description,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
          }));

          setRepos(() => [...filteredRepos]);
        }

        setNextPage(paginationInfo?.next || null);
        if (paginationInfo?.last) {
          const newLastPage = await getLastPageNumberFromUrl(
            paginationInfo?.last
          );
          setLastPage(newLastPage!);
        }
        setLoading(false);
      } catch {
        setError('Failed to load repositories.');
        setLoading(false);
      }
    };

    fetchRepos();
  }, [page, username]);

  if (loading) {
    return <RepositoriesSkeleton />;
  }

  if (error) {
    return (
      <Error
        errorTitle={error}
        subTitle={'OOOOOPS!! There was an error'}
        imageLink={'/assets/svgs/repo-error.svg'}
      />
    );
  }

  const handleNextPage = () => {
    if (nextPage) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  console.log(typeof lastPage, lastPage);

  return (
    <div className="mb-8">
      <div className="border border-solid border-gray-600 dark:border-dark-500 rounded-xl ">
        <div className="bg-slate-300 dark:bg-dark-500 text-gray-800 dark:text-gray-200 w-full py-6 px-6 flex justify-between items-center rounded-t-xl">
          <h2 className="capitalize text-lg xl:text-xl font-semibold ">
            {username.replace('-', ' ')}&apos;s Repositories
          </h2>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 px-3 md:px-6 w-full gap-y-5 gap-x-4 py-4">
          {repos.map((item, index) => {
            const {
              name,
              html_url,
              description,
              stargazers_count,
              forks_count,
            } = item;
            return (
              <div
                key={index}
                className="bg-light-400 p-4  dark:bg-dark-500 rounded-xl shadow-lg duration-500 dark:shadow-none"
              >
                <span className="">
                  <Link
                    href={html_url}
                    className="capitalize duration-500 transistion-all hover:opacity-80 ease-linear"
                  >
                    <h2 className=" text-lg md:text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {name}
                    </h2>
                  </Link>
                </span>

                <p className="text-sm md:text-lg mt-4 text-gray-500 dark:text-gray-400 font-medium ">
                  {description ?? 'No description available'}
                </p>
                <div className="w-full flex justify-end mt-4">
                  <div className=" flex gap-2  md:gap-4 text-sm md:text-lg items-center h-8 border border-solid  border-gray-400 rounded-lg w-fit px-2 md:px-4 ">
                    <span className="flex gap-1 md:gap-2 items-center text-gray-800 dark:text-gray-200 ">
                      <IoStarOutline />
                      <p className="">Stars</p>

                      <p className="">{stargazers_count}</p>
                    </span>
                    <div className="h-full w-[1px] bg-gray-400" />
                    <span className="flex gap-1 md:gap-2 items-center text-gray-800 dark:text-gray-200 ">
                      <BiGitRepoForked />
                      <p className="">Fork</p>

                      <p className="">{forks_count}</p>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <PaginationButton
        lastPage={lastPage}
        page={page}
        setPage={setPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </div>
  );
};

export default Repositories;
