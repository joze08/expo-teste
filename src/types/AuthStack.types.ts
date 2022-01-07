import { StackNavigationProp } from "@react-navigation/stack"

export type AuthStackParamList = {
  Login: undefined
  SignIn: undefined
}

type AuthNavigationProp = StackNavigationProp<AuthStackParamList>

export type AuthTypes = {
  navigation: AuthNavigationProp
}

export type TabBottomParamList = {
  Profile: undefined
  News: undefined
  Messages: undefined
  SendMessages: undefined
}

type TabNavigationProp = StackNavigationProp<TabBottomParamList>

export type TabTypes = {
  navigation: TabNavigationProp
}