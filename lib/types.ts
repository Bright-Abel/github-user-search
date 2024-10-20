import { ReactNode } from 'react';

export interface SearchParamProps {
  params: {
    username: string;
  };
}
export interface HeadersProps {
  'x-ratelimit-limit': string | undefined;
  'x-ratelimit-remaining': string | undefined;
}

export interface ReposProps {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  node_id: string;
}

export interface UserProps {
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  id: number;
  twitter_username: string;
  bio: string;
  blog: string;
  location: string;
  company: string;
  avatar_url: string;
  url: string;
  login: string;
  html_url: string;
}

export interface FollowersProps
  extends Pick<UserProps, 'login' | 'html_url' | 'avatar_url'> {
  node_id: string;
}

export interface CardProps {
  type?: string;
  typeValue?: number;
  icon?: ReactNode;
}
