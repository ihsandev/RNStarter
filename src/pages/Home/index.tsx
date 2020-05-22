import React from 'react';
import styled from 'styled-components/native';
import {Color} from '../../utils';
import {Button} from '../../components';

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: ${Color.primary};
  font-weight: bold;
`;

const Desc = styled.Text`
  color: ${Color.primary};
  font-size: 40px;
  font-weight: bold;
`;

const Home: React.FC = () => (
  <Wrapper>
    <Title>WELCOME TO</Title>
    <Desc>RN Starter</Desc>
    <Button>GET STARTED</Button>
  </Wrapper>
);

export default Home;
