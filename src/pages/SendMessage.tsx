import React from 'react';

import { Container, HeaderTitle, InputText, ButtonText, SendButton } from '../styles/MessagesStyle';

function SendMessage() {
  return (
    <Container>

      <HeaderTitle>Save-Natura</HeaderTitle>

      <InputText
        numberOfLines={3}
        multiline={true}
      />

      <SendButton >
        <ButtonText>Enviar</ButtonText>
      </SendButton>

    </Container>
  );
}

export default SendMessage;