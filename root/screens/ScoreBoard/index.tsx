import React from 'react';
import AppNavigation from '@/components/AppNavigation';
import SafeWrapper from '@/components/SafeWrapper';
import Button from '@/components/default/Button';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Screens, TUseNav} from '@/models/root';

export default function ScoreBoard() {
  const navigation = useNavigation<TUseNav>();

  return (
    <SafeWrapper>
      <View className="gap-4 my-auto">
        <Button
          title="My results"
          onPress={() => navigation.navigate(Screens.ScoreBoardMyResults)}
        />
        <Button
          title="Top 5"
          onPress={() => navigation.navigate(Screens.ScoreBoardTop5)}
        />
      </View>

      <AppNavigation />
    </SafeWrapper>
  );
}
