import { RootStateType } from '../types';

import { PostsType } from '@root/types';

export const selectPosts = (state: RootStateType): PostsType[] =>
  state.postsList.posts;
