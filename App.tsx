/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import React from 'react';
import Login from './src/screens/Login'
import Profile from './src/screens/Profile'
import Repositories from './src/screens/Repositories'
import Followers from './src/screens/Followers'
import { Provider } from 'react-redux';
import { rootStore } from "./src/redux";

import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'




const App = () => {
  return (
  <Provider store={rootStore}>   
  <NavigationContainer>
    <Tab.Navigator 
      tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: 'gray',
      }}
    
    >
      <Tab.Screen name={"_"} options={{tabBarVisible:false, tabBarIcon: () => ( <Icon name={'log-out-outline'} size={25} color={'#AEAEAE'} />)}} component={Login}/>
      <Tab.Screen name="Home"  component={Profile} options={{tabBarIcon: () => ( <Icon name={'home'} size={25} color={'gray'} />)}}/>
      <Tab.Screen name="Repos" component={Repositories} options={{tabBarIcon: () => ( <Icon name={'logo-github'} size={25} color={'gray'} />)}}/>
      <Tab.Screen name="Seguidores" options={{tabBarBadgeStyle: {color: 'white'} ,tabBarIcon: () => ( <Icon name={'people-outline'} size={25} color={'gray'} />)}} component={Followers}/>
      <Tab.Screen name="Seguindo"  options={{tabBarBadgeStyle: {color: 'white'}, tabBarIcon: () => ( <Icon name={'people-outline'} size={25} color={'gray'} />)}} component={Followers}/>

    
      

    </Tab.Navigator>
  </NavigationContainer>
  </Provider>
);
  }

export default App;
