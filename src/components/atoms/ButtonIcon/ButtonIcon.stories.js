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
  background-color: ${({ theme }) => theme.note};
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
  argTypes: {
    active: {
      control: 'boolean',
    },
  },
};

export const Bulb = (args) => <ButtonIcon {...args} icon={bulbIcon} />;

export const Logout = (args) => <ButtonIcon {...args} icon={logoutIcon} />;

export const Pen = (args) => <ButtonIcon {...args} icon={penIcon} />;

export const Plus = (args) => <ButtonIcon {...args} icon={plusIcon} />;

export const Twitter = (args) => <ButtonIcon {...args} icon={twitterIcon} />;
