import {takeLatest} from 'redux-saga/effects';
import {SagaActionKey} from '@root/enum';
import SetPostsSagaWorker from './posts/setPosts';

export default function* rootSaga() {
  yield takeLatest(SagaActionKey.SetPosts, SetPostsSagaWorker);
}
