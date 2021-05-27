/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.primary};
`;

export default {
  title: 'Atoms/ButtonIcon',
  component: ButtonIcon,
  decorators: [
    (Story) => (
      <YellowBackground>
        <Story />
      </YellowBackground>
    ),
  ],
  args: {
    active: false,
  },
  argTypes: {
    active: {
      control: 'boolean',
    },
  },
};

export const Bulb = ({ active }) => (
  <ButtonIcon active={active} icon={bulbIcon} />
);

export const Logout = ({ active }) => (
  <ButtonIcon active={active} icon={logoutIcon} />
);

export const Pen = ({ active }) => (
  <ButtonIcon active={active} icon={penIcon} />
);

export const Plus = ({ active }) => (
  <ButtonIcon active={active} icon={plusIcon} />
);

export const Twitter = ({ active }) => (
  <ButtonIcon active={active} icon={twitterIcon} />
);
