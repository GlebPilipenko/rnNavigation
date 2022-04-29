import {RootStateType} from '../types';
import {PostsType} from '../../types';

export const selectPosts = (state: RootStateType): PostsType[] =>
  state.postsList.posts;
