import {Text} from 'react-native';
import React from 'react';

interface CustomTextProps {
  children: React.ReactNode;
}

export default function CustomText({children}: CustomTextProps) {
  return <Text>{children}</Text>;
}
