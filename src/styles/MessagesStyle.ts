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

export const SearchView = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;

  margin-bottom: 10%;
`;

export const InputId = styled.TextInput`
  width: 60%;
  margin: 0 6% 0 12%;
  padding: 0 2%;
  background: #CFEBC1;

  border: #CFEBC1 6px;

  font-size: 18px;
`;

export const SearchButton = styled.TouchableOpacity`
  background: #3F7D20;
  padding: 1%;
  border-radius: 4px;
`;

export const Card = styled.View`
  display: flex;
  width: 100%;
  align-items: center;

  margin-bottom: 7%;
`;

export const MessageCard = styled.View`
  background: #CCC;

  margin: 0 10% 3%;
  border: #CCC 10px;

`;

export const TextMessage = styled.Text`
  font-size: 16px;
`;

export const RaiseButton = styled.TouchableOpacity`
  background: #E45C5C;
  padding: 1% 2%;

  border-radius: 4px;
`;


//==========================Send Messages=============================

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

