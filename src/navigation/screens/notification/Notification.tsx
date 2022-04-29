import * as React from 'react';
import {useEffect} from 'react';
import {ScreenContainer} from '@root/navigation/screens';
import {setPostsAC} from '@root/store/actions';
import {useDispatch} from 'react-redux';

export const NotificationScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPostsAC());
  }, [dispatch]);

  return <ScreenContainer>Notification</ScreenContainer>;
};
