import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {Color} from '../../utils';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Color.primary};
`;

const Title = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

const Splash: React.FC = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  });

  return (
    <Wrapper>
      <Title>Splash Screen</Title>
    </Wrapper>
  );
};

export default Splash;
