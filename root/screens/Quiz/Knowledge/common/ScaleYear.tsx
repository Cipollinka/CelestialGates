import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import clsx from 'clsx';

interface ScaleYearProps {
  year: number;
}

export default function ScaleYear({year}: ScaleYearProps) {
  return (
    <View className="rounded-2xl flex-1 overflow-hidden">
      <LinearGradient
        colors={['#FFF327', '#F47015']}
        start={{x: 0, y: 0}}
        className="h-[324px] flex-1"
        end={{x: 1, y: 0}}>
        <View className="flex-1 justify-center h-[324px] p-4 px-6 items-center relative">
          {[1, 2, 3, 4].map(item => {
            const currentTop = 25 * item - 10;

            return (
              <View
                key={item}
                style={{
                  top: currentTop + '%',
                }}
                className={clsx('absolute w-6 h-1.5 bg-black')}
              />
            );
          })}
          <Text className="font-bold text-xl">{year}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}
