import React from 'react';
import { Button as ButtonMui, ButtonProps } from '@mui/material';

type Props = {
  children: React.ReactNode;
  className?: string;
} & ButtonProps;


export const Button = (props: Props) => {
  return (
    <ButtonMui {...props} className={`${props?.className} w-full justify-center items-center m-0 rounded-xl`}>
      {props.children}
    </ButtonMui>
  );
};

