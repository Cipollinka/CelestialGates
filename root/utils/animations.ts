import { Animated, Easing } from 'react-native';

export const createPulseAnimation = (
  value: Animated.Value,
  duration: number = 2000,
) => {
  return Animated.loop(
    Animated.sequence([
      Animated.timing(value, {
        toValue: 0.5,
        duration: duration / 2,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(value, {
        toValue: 1,
        duration: duration / 2,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]),
  );
};

export const createFloatAnimation = (
  value: Animated.Value,
  duration: number = 3000,
) => {
  return Animated.loop(
    Animated.sequence([
      Animated.timing(value, {
        toValue: -10,
        duration: duration / 2,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(value, {
        toValue: 0,
        duration: duration / 2,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]),
  );
};
