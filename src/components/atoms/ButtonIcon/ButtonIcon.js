import styled from 'styled-components';

const ButtonIcon = styled.button`
  border: none;
  border-radius: 20px;
  width: 67px;
  height: 67px;
  background-image: url(${({ icon }) => icon});
  background-size: 40px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
`;

export default ButtonIcon;
