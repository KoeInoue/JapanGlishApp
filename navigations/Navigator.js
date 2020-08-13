import React, { useState, useEffect } from 'react';
import SplashScreen from '../screens/SplashScreen'
import TopScreen from '../screens/TopScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import LessonScreen from '../screens/LessonScreen';
import CreateScreen from '../screens/CreateScreen';
import SettingScreen from '../screens/SettingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyLessonScreen from '../screens/MyLessonScreen';
import BrowserScreen from '../screens/BrowserScreen';
import LogoutScreen from '../screens/LogoutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage'

import { Image } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TopStack = () => {
  return (
    <Stack.Navigator initialRouteName="Top">
      <Stack.Screen
        name="Top"
        component={TopScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Navigator" component={Navigator} />
    </Stack.Navigator>
  )
}

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Lesson" component={LessonScreen} />
    </Stack.Navigator>
  )
}

const SettingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="MyLesson" component={MyLessonScreen} />
      <Stack.Screen name="Browser" component={BrowserScreen} />
      <Stack.Screen name="Logout" component={LogoutScreen} />
    </Stack.Navigator>
  )
}

const HomeTabs = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#EB5D00',
      inactiveTintColor: '#333',
      activeBackgroundColor: '#EEDCB3',
    }}>
      <Tab.Screen name="Home" component={HomeStack} options={{
        tabBarLabel: 'ホーム',
        tabBarIcon: ({ focused }) => (
          <Image source={focused ? require('../src/img/home-active.png') : require('../src/img/home.png')} style={{ width: 20, height: 20 }} />
        ),
      }} />
      <Tab.Screen name="Create" component={CreateScreen} options={{
        tabBarLabel: 'レッスン作成',
        tabBarIcon: ({ focused }) => (
          <Image source={focused ? require('../src/img/pen-active.png') : require('../src/img/pen.png')} style={{ width: 20, height: 20 }} />
        ),
      }} />
      <Tab.Screen name="Setting" component={SettingStack} options={{
        tabBarLabel: 'その他',
        tabBarIcon: ({ focused }) => (
          <Image source={focused ? require('../src/img/head-active.png') : require('../src/img/head.png')} style={{ width: 20, height: 20 }} />
        ),
      }} />
    </Tab.Navigator>
  )
}

export default function Navigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    isAuth().then(() => {
      setIsLoading(false);
    });
  }, []);

  const isAuth = async () => {
    setIsLoading(true);
    const tokens = await AsyncStorage.getItem('tokens');
    if (tokens == null) {
      return setIsLoggedIn(false);
    } else {
      return setIsLoggedIn(true);
    }
  }

  if (isLoading) {
    return <SplashScreen />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Top">
          <Stack.Screen
            name={(isLoggedIn) ? 'HomeTabs' : 'TopStack'}
            component={(isLoggedIn) ? HomeTabs : TopStack}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
