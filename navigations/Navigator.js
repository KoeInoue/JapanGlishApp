import React, { useEffect, useReducer, useMemo, Alert } from 'react';
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
import DetailScreen from '../screens/DetailScreen';
import EditScreen from '../screens/EditScreen';
import BrowserScreen from '../screens/BrowserScreen';
import LogoutScreen from '../screens/LogoutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage'
import { Image } from 'react-native';
import axios from 'axios'

const AuthContext = React.createContext();
const URL = 'https://japanglish.herokuapp.com/api/';

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
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
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
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('tokens');
      } catch (e) {
        
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        try {
          fetch(`${URL}login`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: data.email,
              password: data.password,
            }),
            })
            .then(res => res.json())
            .then(tokens => {
              if (tokens.token) {
                AsyncStorage.setItem('tokens', JSON.stringify(tokens.token));
                dispatch({ type: 'SIGN_IN', token: tokens.token });
              } else {
                alert(
                  'メールアドレスかパスワードが間違っています。'
                )
              }
            })
          } catch (error) {
          return console.error(error);
        }
      },
      
      signOut: async () => {
        await AsyncStorage.removeItem('tokens');
        dispatch({ type: 'SIGN_OUT' })
      },

      signUp: async data => {
        try {
          fetch(`${URL}register`, {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              password: data.password,
              introduce: data.introduce
            }),
          }).then(res => res.json())
            .then(tokens => {
              if (tokens.token) {
                AsyncStorage.setItem('tokens', JSON.stringify(tokens.token));
                dispatch({ type: 'SIGN_IN', token: tokens.token });
              } else {
                alert(
                  '入力された情報に誤りがあります。'
                )
              }
            }).catch((e) => {
              console.error(e)
            });
        } catch (error) {
          return console.error(error);
        }
      },
    }),
    []
  );
  
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{
                headerShown: false,
              }}
            />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="TopStack"
              component={TopStack}
              options={{
                headerShown: false,
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen
              name="HomeTabs"
              component={HomeTabs}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
export { AuthContext }