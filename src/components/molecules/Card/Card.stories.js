import React from 'react';
import CardComponent from './Card';

export default {
  title: 'Molecules/Card',
  component: CardComponent,
  argTypes: {
    cardType: {
      options: ['note', 'twitter', 'article'],
      control: { type: 'select' },
    },
  },
};

export const Card = ({ cardType }) => <CardComponent cardType={cardType} />;
