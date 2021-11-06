/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  UserRoot: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  TestRoot: undefined,
  Visit: undefined,
  Uploadxray: undefined,
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  UserHome: undefined;
  UserProfile: undefined;
};

export type RootTopTabParamList = {
  PcrTest: undefined;
  AntTest: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type RootTopTabScreenProps<Screen extends keyof RootTopTabParamList> = CompositeScreenProps<
  MaterialTopTabScreenProps<RootTabParamList>,
  NativeStackScreenProps<RootStackParamList>
>;
