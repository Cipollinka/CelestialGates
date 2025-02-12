import {View, Text, TextInput, TextInputProps} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface TextAreaProps extends TextInputProps {}

export default function TextArea({
  placeholder,
  value,
  onChangeText,
  ...props
}: TextAreaProps) {
  return (
    <View className="rounded-2xl overflow-hidden w-full">
      <LinearGradient
        colors={['#B2B1B1', '#5D5D5D']}
        className="h-[76px] rounded-2xl items-center justify-center w-full">
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          className="bg-transparent text-2xl font-bold h-[76px] pl-4"
          {...props}
        />
      </LinearGradient>
    </View>
  );
}
