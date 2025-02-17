import React from 'react';
import {TextInput, View, TextInputProps, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface TextAreaProps extends TextInputProps {
  error?: string;
}

export default function TextArea({error, style, ...props}: TextAreaProps) {
  return (
    <View className="relative w-full">
      <LinearGradient
        colors={['#3D2755', '#2A1B3D']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        className={`rounded-xl p-[1px] ${error ? 'border border-error' : ''}`}>
        <View className="bg-mystic-overlay/80 rounded-xl">
          <TextInput
            className="px-4 py-3 text-divine-white text-lg"
            placeholderTextColor="#B565A7B0"
            style={[
              {
                shadowColor: '#FFD700',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 4,
              },
              style,
            ]}
            {...props}
          />
        </View>
      </LinearGradient>
      {error && <Text className="text-error text-sm mt-1 ml-2">{error}</Text>}
    </View>
  );
}
