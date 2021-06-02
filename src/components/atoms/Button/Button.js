import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey200};
      font-size: ${({ theme }) => theme.fontSize.xxs};
      width: 105px;
      height: 30px;
    `}
`;

export default Button;
