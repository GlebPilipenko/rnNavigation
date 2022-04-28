import {rootReducer} from '..';

export type RootStateType = ReturnType<typeof rootReducer>;
export type SagaWorkerType<T> = Generator<unknown, void, T>;
