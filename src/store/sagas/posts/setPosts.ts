import { Route, StackKey, TransitionDelay } from '@root/enum';
import { Posts } from '@root/services/api';
import { setPostsAC } from '@root/store/reducers';
import { selectPosts } from '@root/store/selectors';
import { SagaWorkerType } from '@root/store/types';
import { PostsType } from '@root/types';
import { arePostsFull, navigate } from '@root/utils';
import { call, delay, put, select } from 'redux-saga/effects';

export default function* SetPostsSagaWorker(): SagaWorkerType<PostsType[]> {
  try {
    const posts = yield call(Posts.get, Route.Posts);

    yield put(setPostsAC(posts));

    const updatedPosts = yield select(selectPosts);

    if (arePostsFull(updatedPosts)) {
      yield delay(TransitionDelay.ToHomePage);
      yield navigate(StackKey.Home);
    }
  } catch (error) {
    console.log(error);
  }
}
