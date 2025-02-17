import {View, Text, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import SafeWrapper from '@/components/SafeWrapper';
import Button from '@/components/default/Button';
import {Screens, TUseNav} from '@/models/root';
import {useNavigation} from '@react-navigation/native';
import MysticOverlay from '@/components/effects/MysticOverlay';

export default function Welcome() {
  const navigation = useNavigation<TUseNav>();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeWrapper>
      <MysticOverlay />
      <View className="flex-1 justify-center items-center">
        <Animated.View
          style={{opacity: fadeAnim}}
          className="px-6 py-8 rounded-3xl bg-mystic-overlay backdrop-blur-sm">
          <Text className="text-3xl font-bold text-divine-white text-center mb-6">
            Welcome, Seeker of Divine Knowledge
          </Text>
          <Text className="text-xl text-divine-white text-center leading-relaxed mb-8">
            Embark on an extraordinary journey through the realms of ancient
            deities. Uncover the mysteries of Greek, Norse, and Eastern
            pantheons as you challenge your wisdom in divine trials.
          </Text>
          <Text className="text-lg text-accent text-center italic mb-12">
            "Through knowledge of the gods, we understand ourselves."
          </Text>
          <View className="gap-4">
            <Button
              title="Begin Your Divine Journey"
              variant="divine"
              size="lg"
              onPress={() => navigation.navigate(Screens.Bonus)}
            />
          </View>
        </Animated.View>
      </View>
    </SafeWrapper>
  );
}
