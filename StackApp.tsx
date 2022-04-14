import * as React from 'react';
import {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type PropsType = {
  route: any;
  navigation: any;
};

function DetailsScreen({route, navigation}: PropsType) {
  const {id} = route.params;

  const onNavigationBackPress = () => navigation.goBack();
  const onNavigationPress = () => navigation.navigate('Home');
  const onMoreDetailsPress = () => navigation.push('Details');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>ID - {id}</Text>
      <Button title="Go to Home" onPress={onNavigationPress} />
      <Button title="Go back" onPress={onNavigationBackPress} />
      <Button title="Go to More details" onPress={onMoreDetailsPress} />
    </View>
  );
}

function HomeScreen({route, navigation}: PropsType) {
  const onNavigationPress = () => navigation.navigate('Details', {id: 1});
  const onNavigationPostPress = () => navigation.navigate('Post');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>

      {route.params?.post && <Text>{route.params?.post}</Text>}

      <Button title="Go to Details" onPress={onNavigationPress} />
      <Button title="Go to Post" onPress={onNavigationPostPress} />
    </View>
  );
}

function PostScreen({navigation}: PropsType) {
  const [value, setValue] = useState('');

  const onDonePress = () => {
    return navigation.navigate({
      name: 'Home',
      params: {post: value},
      merge: true,
    });
  };

  return (
    <View>
      <TextInput
        style={
          {
            height: 30,
            padding: 10,
            borderStyle: 1,
            backgroundColor: 'red',
          } as any
        }
        value={value}
        onChangeText={setValue}
      />
      <Button title="Done" onPress={onDonePress} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
