import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native';

import useAuth from '../hooks/auth';
import { Container, TitleLogo1, TitleLogo2, Label, Input, NoLog, Button, Logo, Texto, ButtonText } from '../styles/AuthStyles';
import { AuthTypes } from '../types/AuthStack.types';

function Login({ navigation }: AuthTypes) {

  const { login } = useAuth();

  function handleNavigation(params: string) {
    params === "SignIn" ? navigation.navigate('SignIn') : navigation.navigate('TabRoutes')
  }

  function handleLogIn() {
    login();
  }

  /*   function handleChange() {
  
    } */

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
          //onChangeText={(i) => {handleChange()}}
          />

          <Label>Senha:</Label>
          <Input
            secureTextEntry={true}
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