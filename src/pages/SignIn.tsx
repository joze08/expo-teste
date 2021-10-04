import React from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView} from 'react-native';

import { Container, TitleLogo1, TitleLogo2, Label, Input, Button, Logo, ButtonText } from '../styles/AuthStyles';
import { AuthTypes } from '../types/AuthStack.types';

function SignIn({navigation}: AuthTypes) {

  function handleNavigation() {
    navigation.navigate("TabRoutes")
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

        <Label>Nome:</Label>
        <Input />

        <Label>Email:</Label>
        <Input />

        <Label>Senha:</Label>
        <Input />

        <Button onPress={handleNavigation}>
          <ButtonText>Entrar</ButtonText>
        </Button>

        </KeyboardAvoidingView>
      </Container>
    </SafeAreaView>  
  );
}

export default SignIn;