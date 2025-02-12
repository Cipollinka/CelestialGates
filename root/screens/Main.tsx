import {View, Image} from 'react-native';
import React from 'react';
import SafeWrapper from '@/components/SafeWrapper';
import Heading from '@/components/default/Heading';
import Button from '@/components/default/Button';
import {useNavigation} from '@react-navigation/native';
import {Screens, TUseNav} from '@/models/root';
import AppNavigation from '@/components/AppNavigation';

export default function Main() {
  const navigation = useNavigation<TUseNav>();
  return (
    <SafeWrapper>
      <Heading
        title="Quiz of the Celestial Gates"
        className="my-10 !text-[40px] max-w-[288px]"
      />

      <Image
        source={require('@/assets/images/main.png')}
        className="flex-1 max-w-full max-h-full rounded-3xl"
      />

      <View className="mt-10 gap-4 mb-4">
        <Button
          title="Collection"
          onPress={() => navigation.navigate(Screens.Collection)}
        />
        <Button
          title="About Us"
          onPress={() => navigation.navigate(Screens.AboutUs)}
        />
        <Button
          title="Scoreboard"
          onPress={() => navigation.navigate(Screens.ScoreBoard)}
        />
      </View>

      <AppNavigation />
    </SafeWrapper>
  );
}
