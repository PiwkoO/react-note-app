import styled, { css } from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 50px;
  width: 220px;
  height: 47px;
  background-color: ${({ theme }) => theme.note};
  font-family: 'Montserrat', sans-serif;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      width: 105px;
      height: 30px;
      background-color: ${({ theme }) => theme.grey200};
      font-size: ${({ theme }) => theme.fontSize.xxs};
    `}
`;

export default Button;
