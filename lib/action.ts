'use server';
import { Octokit } from '@octokit/rest';
import { FollowersProps } from './types';

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

export const getUsers = async (username: string) => {
  try {
    const user = await octokit.request(`GET /users/${username}`, {
      username: `${username}`,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getFollowers = async (username: string) => {
  try {
    const response = await octokit.request(`GET /users/${username}/followers`, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    // Extract the followers from the response data
    return response.data.map((follower: any) => ({
      node_id: follower.node_id,
      avatar_url: follower.avatar_url,
      login: follower.login,
      html_url: follower.html_url,
    })) as FollowersProps[];
  } catch (error) {
    console.log(error);
  }
};

export const getRepositoriesWithPagination = async (
  username: string,
  page = 1
) => {
  try {
    const response = await octokit.request('GET /users/{username}/repos', {
      username,
      per_page: 30, // Fetch 30 repos per page
      page, // Specify the page number
    });

    const { data, headers } = response;

    // Parsing the `Link` header for pagination info
    const linkHeader = headers['link'];
    const paginationInfo = parseLinkHeader(linkHeader!);

    return {
      data, // The current page's repos
      paginationInfo, // Information about next/previous pages
    };
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return { data: [], paginationInfo: null };
  }
};

// Helper function to parse the 'Link' header
const parseLinkHeader = (header: string) => {
  if (!header) return null;

  const links = header.split(',').reduce((acc, part) => {
    const match = part.match(/<(.*)>; rel="(.*)"/);
    if (match) {
      acc[match[2]] = match[1];
    }
    return acc;
  }, {} as Record<string, string>);

  return links;
};

export const getLastPageNumberFromUrl = (url: string) => {
  const regex = /(\d+)(?!.*\d)/; // This regex matches the last number in the string
  const match = url.match(regex); // Extract the match
  return match ? Number(match[0]) : null; // Convert the match to a number or return null if not found
};
