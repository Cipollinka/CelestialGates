import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface TimerProps {
  onTimeEnd: () => void;
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export default function Timer({onTimeEnd}: TimerProps) {
  const [time, setTime] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    if (time === 0) {
      onTimeEnd();
      clearInterval(interval);
      setTime(0);
    }

    return () => clearInterval(interval);
  }, [time, onTimeEnd]);

  return (
    <View className="mx-auto rounded-3xl overflow-hidden mt-10">
      <LinearGradient
        colors={['#FFF327', '#F47015']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        className={'items-center justify-center'}>
        <View className="px-10 py-4">
          <Text className="text-2xl font-bold text-center">
            {formatTime(time)}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}
