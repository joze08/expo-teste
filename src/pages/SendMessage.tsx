import React, { useState } from 'react';

import messageApi from '../services/data/messages';
import useAuth from '../hooks/auth';
import api from '../services/api';
import { IStoreData } from '../interfaces/messages.interface';

import { Container, HeaderTitle, InputText, ButtonText, SendButton } from '../styles/MessagesStyle';

function SendMessage() {

  const { token, setLoading } = useAuth();

  const [message, setMessage] = useState<IStoreData>({} as IStoreData);

  function storeText(i: IStoreData) {
    setMessage({ ...message, ...i });
  }

  async function handleSendMessage() {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    await messageApi.store(message);
    setMessage({} as IStoreData);

  }

  return (
    <Container>

      <HeaderTitle>Save-Natura</HeaderTitle>

      <InputText
        numberOfLines={3}
        multiline={true}
        onChangeText={(i) => { storeText({ texto: i }) }}
      />

      <SendButton onPress={handleSendMessage}>
        <ButtonText>Enviar</ButtonText>
      </SendButton>

    </Container>
  );
}

export default SendMessage;