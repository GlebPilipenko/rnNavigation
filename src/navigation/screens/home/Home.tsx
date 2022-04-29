import * as React from 'react';
import {ScreenContainer} from '@root/navigation/screens';
import {useSelector} from 'react-redux';
import {selectPosts} from '@root/store/selectors';
import {FlatList, SafeAreaView, Text} from 'react-native';

export const HomeScreen = () => {
  const posts = useSelector(selectPosts);

  if (posts.length) {
    return (
      <FlatList
        data={posts}
        renderItem={({item: {id, title}}) => {
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
