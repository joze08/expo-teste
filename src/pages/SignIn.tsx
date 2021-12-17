import React, { useState } from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Alert } from 'react-native';

import useAuth from '../hooks/auth';

import { Container, TitleLogo1, TitleLogo2, Label, Input, Button, Logo, ButtonText } from '../styles/AuthStyles';
import { AuthTypes } from '../types/AuthStack.types';
import { IRegister } from '../interfaces';

function SignIn({ navigation }: AuthTypes) {

  const { signIn, setLoading } = useAuth();
  const [data, setData] = useState({} as IRegister);

  /* function handleNavigation() {
    navigation.navigate("TabRoutes")
  } */

  function storeAuthData(i: object) {
    setData({ ...data, ...i })
  }

  function handleSignIn() {
    //    try {
    //      if (data?.name && data.email && data.password) {
    signIn(data);
    setLoading(true);
    /*         //Alert.alert("Alguns campos não foram preenchidos!");
          } else {
            Alert.alert("Alguns campos não foram preenchidos!");
          }
        } catch (error) {
          Alert.alert(`Erro ao cadastrar usuário! ${error}`);
        } */
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

          <Label>Nome:</Label>
          <Input
            onChangeText={(i) => { storeAuthData({ name: i }) }}
          />

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

          <Button onPress={handleSignIn}>
            <ButtonText>Cadastrar</ButtonText>
          </Button>

        </KeyboardAvoidingView>
      </Container>
    </SafeAreaView>
  );
}

export default SignIn;