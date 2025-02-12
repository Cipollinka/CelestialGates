import {View, Text} from 'react-native';
import React from 'react';
import AppNavigation from '@/components/AppNavigation';
import SafeWrapper from '@/components/SafeWrapper';
import Block from '@/components/default/Block';
import Button from '@/components/default/Button';
import {useUserStore} from '@/state/userStore';
import Slider from '@react-native-community/slider';

export default function Settings() {
  const music = useUserStore(state => state.music);
  const vibration = useUserStore(state => state.vibration);

  const setMusic = useUserStore(state => state.setMusic);
  const setVibration = useUserStore(state => state.setVibration);

  const resetProgress = useUserStore(state => state.resetProgress);

  return (
    <SafeWrapper>
      <Block>
        <View className="gap-4 mt-5">
          <Text className="text-3xl font-bold">Music</Text>
          <Slider
            value={music}
            onValueChange={setMusic}
            minimumValue={0}
            maximumValue={1}
            step={0.1}
          />
        </View>

        <View className="mt-5 gap-4">
          <Text className="text-3xl font-bold">Vibration</Text>
          <Slider
            value={vibration}
            onValueChange={setVibration}
            minimumValue={0}
            maximumValue={1}
            step={0.1}
          />
        </View>
      </Block>

      <View className="mt-4">
        <Button title="Reset progress" onPress={resetProgress} />
      </View>

      <AppNavigation />
    </SafeWrapper>
  );
}
