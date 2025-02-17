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
      <Heading title="Quiz of the Celestial Gates" className="my-2" />

      <Image
        source={require('@/assets/images/main.png')}
        style={{width: '100%'}}
        resizeMode="contain"
      />

      <View className="mt-2 gap-4">
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
