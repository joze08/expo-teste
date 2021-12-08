import React from 'react';

import useAuth from '../hooks/auth';
import { HeaderTitle, ProfilePic, Username, Container, LogoutButton, TextBtn } from '../styles/ProfileStyle';

export default function Profile() {

  const { logout, user } = useAuth();

  function handleLogOut() {
    logout();
  }

  return (
    <Container>
      <HeaderTitle>Save-Natura</HeaderTitle>
      <ProfilePic source={require('../../assets/ProPic.png')} />
      <Username>{user?.name}</Username>
      <LogoutButton onPress={handleLogOut}><TextBtn>Sair</TextBtn></LogoutButton>
    </Container>
  );
}