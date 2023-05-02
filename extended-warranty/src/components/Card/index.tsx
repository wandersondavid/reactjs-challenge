
import React from 'react';
import { Card as CardMui, CardProps } from '@mui/material';

type Props = {
  children: React.ReactNode;
  className?: string;
} & CardProps;

export const Card = (props: Props) => {
  return (
    <CardMui {...props} className={` items-center m-0 shadow-xl rounded-xl ${props?.className}`}>
      {props.children}
    </CardMui>
  )
}