import {PostsType} from '../types';

const FULLED_POSTS_INDEX = 100;

export const arePostsFull = (posts: PostsType[]): number =>
  posts.findIndex((_, index) => index === FULLED_POSTS_INDEX);
