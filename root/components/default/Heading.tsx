import {Text} from 'react-native';
import React from 'react';
import clsx from 'clsx';

interface HeadingProps {
  title: string;
  variant?: 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  color?: 'white' | 'black';
}

export default function Heading({
  title,
  variant = 'h0',
  color = 'white',
  className,
}: HeadingProps) {
  return (
    <Text
      className={clsx('font-bold mx-auto text-center leading-10', className, {
        'text-[40px]': variant === 'h0',
        'text-2xl': variant === 'h1',
        'text-xl': variant === 'h2',
        'text-lg': variant === 'h3',
        'text-white': color === 'white',
        'text-black': color === 'black',
      })}>
      {title}
    </Text>
  );
}
