import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostsType} from '@root/types';

type InitialStateType = {
  posts: PostsType[];
};

const initialState: InitialStateType = {posts: []};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<PostsType[]>) {
      state.posts = [...action.payload];
    },
  },
});

export const {setPosts: setPostsAC} = postsSlice.actions;

export default postsSlice;
