// TODO create button
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: purple;
  width: 100%;
  padding: 10px;
  ${props =>
    props.secondary &&
    css`
      background-color: red;
      width: auto;
    `}
`;

export default Button;
