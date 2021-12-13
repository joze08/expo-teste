import React, { useState } from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native';

import useAuth from '../hooks/auth';
import { Container, TitleLogo1, TitleLogo2, Label, Input, NoLog, Button, Logo, Texto, ButtonText } from '../styles/AuthStyles';
import { AuthTypes } from '../types/AuthStack.types';
import { IAuthenticate } from '../interfaces';

function Login({ navigation }: AuthTypes) {

  const [data, setData] = useState({} as IAuthenticate);

  const { login } = useAuth();

  function handleLogIn() {
    login(data);
  }

  function storeAuthData(i: object) {
    setData({ ...data, ...i })
  }

  function handleNavigation(params: string) {
    params === "SignIn" ? navigation.navigate('SignIn') : navigation.navigate('TabRoutes')
  }

  return (
    <SafeAreaView>
      <Container>
        <KeyboardAvoidingView >
          <StatusBar hidden={true} />
          <Logo>
            <TitleLogo1>Save</TitleLogo1>
            <TitleLogo2>Natura</TitleLogo2>
          </Logo>

          <Label>Email:</Label>
          <Input
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(i) => { storeAuthData({ email: i }) }}
          />

          <Label>Senha:</Label>
          <Input
            secureTextEntry={true}
            onChangeText={(i) => { storeAuthData({ password: i }) }}
          />

          <NoLog onPress={() => handleNavigation("SignIn")}>
            <Texto>Não possui conta?</Texto>
          </NoLog>

          <Button onPress={handleLogIn}>
            <ButtonText>Entrar</ButtonText>
          </Button>

        </KeyboardAvoidingView>
      </Container>
    </SafeAreaView>
  );

}

export default Login;