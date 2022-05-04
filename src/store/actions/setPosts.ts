import { SagaPatternKey } from '@root/enum';

type SetPostsACType = { type: SagaPatternKey.SetPosts };

export const setPostsAC = (): SetPostsACType => ({
  type: SagaPatternKey.SetPosts,
});
