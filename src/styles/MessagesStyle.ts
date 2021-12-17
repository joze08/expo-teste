import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #FFF;
  display: flex;
  align-items: center;

  height: 100%;
`;

export const HeaderTitle = styled.Text`
  color: #3F7D20;

  font-size: 18px;
  font-weight: bold;

  text-align: center;

  margin: 3% 0 10%;
`;

export const InputText = styled.TextInput`
  width: 80%;
  background: #CFEBC1;

  padding: 2%;
`;

export const SendButton = styled.TouchableOpacity`
  background-color: #3F7D20;
  padding: 2% 5% 2%;
  border-radius: 4px;
  margin-top: 10%
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
`;

