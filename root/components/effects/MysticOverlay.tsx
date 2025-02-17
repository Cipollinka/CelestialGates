import React from 'react';
import {View, Dimensions} from 'react-native';
import Svg, {Defs, RadialGradient, Stop, Rect} from 'react-native-svg';

export default function MysticOverlay() {
  const {width, height} = Dimensions.get('window');

  return (
    <View className="absolute inset-0">
      <Svg height="100%" width="100%">
        <Defs>
          <RadialGradient
            id="mysticGrad"
            cx="150"
            cy="150"
            rx="350"
            ry="350"
            gradientUnits="userSpaceOnUse">
            <Stop offset="10%" stopColor="#2A1B3D" stopOpacity="0.125" />
            <Stop offset="95%" stopColor="#1A0B2E" stopOpacity="0.5" />
          </RadialGradient>
        </Defs>
        <Rect
          x="0"
          y="0"
          width={width}
          height={height}
          fill="url(#mysticGrad)"
        />
      </Svg>
      <View className="flex-1 backdrop-blur-sm" />
    </View>
  );
}
