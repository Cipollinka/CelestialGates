import {View} from 'react-native';
import React from 'react';

interface BlockProps {
  children: React.ReactNode;
}

export default function Block({children}: BlockProps) {
  return <View className="bg-[#B896C5] p-5 rounded-3xl">{children}</View>;
}
