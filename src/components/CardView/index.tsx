import React from 'react';

import messageApi from '../../services/data/messages';

import { Card, MessageCard, RaiseButton, ButtonText, TextMessage } from '../../styles/MessagesStyle';

interface CardProps {
  texto: string;
  id: number;
  buttonDelete(id: number): void;
}

const CardView: React.FC<CardProps> = ({ texto, id, buttonDelete }) => {

  function handleDelete() {
    buttonDelete(id);
  }

  return (
    <Card>

      <MessageCard>
        <TextMessage>
          {texto}
        </TextMessage>
      </MessageCard>

      <RaiseButton onPress={handleDelete}>
        <ButtonText>Apagar</ButtonText>
      </RaiseButton>

    </Card>
  );
}

export default CardView;