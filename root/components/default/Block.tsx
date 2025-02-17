import React from 'react';
import {View, ViewProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface BlockProps extends ViewProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'mystic';
}

export default function Block({
  children,
  variant = 'default',
  style,
  ...props
}: BlockProps) {
  const getGradient = () => {
    switch (variant) {
      case 'elevated':
        return ['#2A1B3D', '#1A0B2E'];
      case 'mystic':
        return ['#9F2B68', '#B565A7'];
      default:
        return ['#B896C5', '#9F7AAD'];
    }
  };

  return (
    <View
      className="relative"
      style={{marginVertical: 'auto', borderRadius: 16, overflow: 'hidden'}}>
      {/* Mystical glow effect */}
      <View
        className="absolute -inset-1 bg-accent opacity-10 rounded-3xl blur-md"
        pointerEvents="none"
      />
      <LinearGradient
        colors={getGradient()}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        className="rounded-3xl overflow-hidden"
        pointerEvents="box-none"
        style={[
          {
            shadowColor: '#FFD700',
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 5,
          },
          style,
        ]}
        {...props}>
        <View className="p-2">{children}</View>
      </LinearGradient>
    </View>
  );
}
