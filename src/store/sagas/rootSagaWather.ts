import SetPostsSagaWorker from './posts/setPosts';

import { SagaPatternKey } from '@root/enum';
import { SagaWorkerType } from '@root/store/types';
import { takeLatest } from 'redux-saga/effects';

export default function* rootSaga(): SagaWorkerType<unknown> {
  yield takeLatest(SagaPatternKey.SetPosts, SetPostsSagaWorker);
}
