import {View, TouchableOpacity} from 'react-native';
import React from 'react';

import MainIcon from '@/assets/icons/nav/home.svg';
import QuizIcon from '@/assets/icons/nav/quiz.svg';
import PredictionIcon from '@/assets/icons/nav/predictions.svg';
import PantheonIcon from '@/assets/icons/nav/pantheon.svg';
import SettingsIcon from '@/assets/icons/nav/settings.svg';

import {Screens, TUseNav} from '@/models/root';
import {useNavigation, useRoute} from '@react-navigation/native';

const navItems = [
  {
    Icon: MainIcon,
    screen: Screens.Main,
  },
  {
    Icon: QuizIcon,
    screen: Screens.Quiz,
  },
  {
    Icon: PredictionIcon,
    screen: Screens.Prediction,
  },
  {
    Icon: PantheonIcon,
    screen: Screens.Pantheon,
  },
  {
    Icon: SettingsIcon,
    screen: Screens.Settings,
  },
];

export default function AppNavigation() {
  const navigation = useNavigation<TUseNav>();
  const route = useRoute();

  return (
    <View className="flex-row justify-between items-center mt-auto mb-2">
      {navItems.map(({Icon, screen}, index) => {
        const isActive = route.name === screen;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(screen)}>
            <Icon color={isActive ? '#67E6FC' : '#fff'} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
