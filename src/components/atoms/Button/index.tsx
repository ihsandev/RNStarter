import React from 'react';
import styled from 'styled-components/native';
import {Color} from '../../../utils';

const StyledButton = styled.TouchableOpacity`
  background-color: ${Color.primary};
  padding: 8px 16px;
  border-radius: 10px;
  color: #fff;
`;

const Title = styled.Text`
  color: #fff;
`;

const Button: React.FC = ({children, ...rest}) => {
  return (
    <StyledButton {...rest}>
      <Title>{children}</Title>
    </StyledButton>
  );
};

export default Button;
