import React from 'react';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Primary = () => <Button>save / close</Button>;
export const Secondary = () => <Button secondary>remove</Button>;
