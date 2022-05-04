import * as React from 'react';

import { ScreenContainer } from '@root/navigation/screens';
import { selectPosts } from '@root/store/selectors';
import { ReturnComponentType } from '@root/types';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { useSelector } from 'react-redux';

export const HomeScreen = (): ReturnComponentType => {
  const posts = useSelector(selectPosts);

  if (posts.length) {
    return (
      <FlatList
        data={posts}
        renderItem={({ item: { id, title } }) => {
          return (
            <SafeAreaView>
              <Text>{`${id} - ${title}`}</Text>
            </SafeAreaView>
          );
        }}
      />
    );
  }

  return <ScreenContainer>Home</ScreenContainer>;
};
