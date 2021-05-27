import React from 'react';

import Heading from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
};

export const Normal = () => <Heading>Hello world</Heading>;
export const Big = () => <Heading big>Hello world</Heading>;
