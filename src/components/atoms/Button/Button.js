import styled, { css } from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 50px;
  width: 220px;
  height: 47px;
  background-color: ${({ theme }) => theme.primary};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      width: 105px;
      height: 30px;
      background-color: ${({ theme }) => theme.grey200};
      font-size: 10px;
    `}
`;

export default Button;

// background-color: #ffd82b;
