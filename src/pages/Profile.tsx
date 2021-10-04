import React from 'react';

import { HeaderTitle, ProfilePic, Username, Container } from '../styles/ProfileStyle';

export default function Profile(){

  return(
    <Container>
      <HeaderTitle>Save-Natura</HeaderTitle>
      <ProfilePic source={ require('../../assets/ProPic.png')}/>
      <Username>José Airton</Username>
    </Container>
  );
}