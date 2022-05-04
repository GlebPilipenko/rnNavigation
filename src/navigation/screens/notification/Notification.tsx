import * as React from 'react';
import { useEffect } from 'react';

import { ScreenContainer } from '@root/navigation/screens';
import { setPostsAC } from '@root/store/actions';
import { ReturnComponentType } from '@root/types';
import { useDispatch } from 'react-redux';

export const NotificationScreen = (): ReturnComponentType => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPostsAC());
  }, [dispatch]);

  return <ScreenContainer>Notification</ScreenContainer>;
};
