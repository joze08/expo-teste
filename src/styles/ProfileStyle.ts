import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #72B01D;
  height: 100%;
  width: 100%;
`;

export const HeaderTitle = styled.Text`
  color: #FFF;

  font-size: 18px;
  font-weight: bold;

  text-align: center;

  margin: 3% 0 10%;

`;

export const ProfilePic = styled.Image`
  height: 24%;
  width: 40%;

  margin: 0 30% 5%;
`;

export const Username = styled.Text`
  color: #FFF;

  font-size: 20px;
  text-align: center;

`;

export const LogoutButton = styled.TouchableOpacity`
  background-color: #FFF;
  color: #333;

  align-items: center;
  justify-content: center;

  margin: 8% 20% 0;
  display: flex;

  height: 6%;

  border-radius: 4px;
`;

export const TextBtn = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;