import React from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView} from 'react-native';

import { Container, TitleLogo1, TitleLogo2, Label, Input, NoLog, Button, Logo, Texto, ButtonText } from '../styles/AuthStyles';
import { AuthTypes } from '../types/AuthStack.types';



function Login({navigation}: AuthTypes) {

  function handleNavigation(params: string){
    params === "SignIn" ? navigation.navigate('SignIn') : navigation.navigate('TabRoutes')
  }

  return(
    <SafeAreaView>
      <Container>
      <KeyboardAvoidingView >
        <StatusBar hidden={true}/>
        <Logo>
          <TitleLogo1>Save</TitleLogo1>
          <TitleLogo2>Natura</TitleLogo2>
        </Logo>

        <Label>Email:</Label>
        <Input />

        <Label>Senha:</Label>
        <Input />

        <NoLog onPress={() => handleNavigation("SignIn")}>
          <Texto>Não possui conta?</Texto>
        </NoLog>

        <Button onPress={() => handleNavigation("")}>
          <ButtonText>Entrar</ButtonText>
        </Button>

        </KeyboardAvoidingView>
      </Container>
    </SafeAreaView>     
  );
  
}

export default Login;