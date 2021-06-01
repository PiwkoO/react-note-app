import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  border: none;
  border-radius: 20px;
  width: 67px;
  height: 67px;
  background-image: url(${({ icon }) => icon});
  background-size: 40%;
  background-position: 50% 50%;
  background-repeat: no-repeat;

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
