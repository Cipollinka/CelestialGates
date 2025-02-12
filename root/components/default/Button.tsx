import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import clsx from 'clsx';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  isDisabledHidden?: boolean;
  width?: number;
}

export default function Button({
  title,
  onPress,
  disabled,
  isDisabledHidden,
  width,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{width: width || '100%'}}
      className={clsx('rounded-3xl overflow-hidden', {
        'w-full': !width,
      })}>
      <LinearGradient
        colors={['#FFF327', '#F47015']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        className={clsx(
          'w-full !h-16 rounded-3xl items-center justify-center',
          {
            'opacity-40': disabled && !isDisabledHidden,
          },
        )}>
        <View className="items-center justify-center h-16 w-full">
          <Text className="text-2xl font-bold">{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
