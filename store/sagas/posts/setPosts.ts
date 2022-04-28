import {call, delay, put, select} from 'redux-saga/effects';
import {Route, StackKey, TransitionDelay} from '../../../enum';
import {PostsType} from '../../../types';
import {setPostsAC} from '../../reducers';
import {Posts} from '../../../services/api';
import {arePostsFull, navigate} from '../../../utils';
import {SagaWorkerType} from '../../types';
import {selectPosts} from '../../selectors';

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
