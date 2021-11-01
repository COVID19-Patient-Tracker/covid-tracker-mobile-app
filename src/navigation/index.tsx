import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../constants/navtypes';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  NotFoundScreen,
  UserHomeScreen,
  UserProfileScreen,
  PcrTestScreen,
  AntigenTestScreen,
  VisitHistoryScreen,
  UploadXrayScreen,
} from '../screens';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen}
        options={{
          title: 'Login',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="SignUp" component={RegisterScreen}
        options={{
          title: 'Sign Up',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}
        options={{
          title: 'Forgot Password',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="UserRoot" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Visit" component={VisitHistoryScreen}
        options={{
          title: 'Visit History',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="TestRoot" component={TopTapNavigator}
        options={{
          title: 'Test Results',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Uploadxray" component={UploadXrayScreen}
        options={{
          title: 'Upload Xray',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  //const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="UserHome"
      screenOptions={{
        tabBarActiveTintColor: "#1c7a75",
      }}>
      <BottomTab.Screen
        name="UserHome"
        component={UserHomeScreen}
        options={({ navigation }: RootTabScreenProps<'UserHome'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Root')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="sign-out"
                size={25}
                //color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user-circle-o" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();

function TopTapNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="PcrTest"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: { fontSize: 16, fontWeight:"bold" },
        tabBarStyle: { backgroundColor: "#11a5a0" },
      }}
    >
      <Tab.Screen
        name="PcrTest"
        component={PcrTestScreen}
        options={{ tabBarLabel: 'PCR Test' }}
      />
      <Tab.Screen
        name="AntTest"
        component={AntigenTestScreen}
        options={{ tabBarLabel: 'Antigen Test' }}
      />
    </Tab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}


