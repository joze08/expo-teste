import { StackNavigationProp } from "@react-navigation/stack"

export type AuthStackParamList = {
  Login: undefined
  SignIn: undefined
  TabRoutes: undefined
  DrawerRoutes: undefined
}

type AuthNavigationProp = StackNavigationProp<AuthStackParamList>

export type AuthTypes = {
  navigation: AuthNavigationProp
}