import {View, Text, Image} from 'react-native';
import React from 'react';
import SafeWrapper from '@/components/SafeWrapper';
import {useNavigation} from '@react-navigation/native';
import {Screens, TUseNav} from '@/models/root';
import Button from '@/components/default/Button';
import AppNavigation from '@/components/AppNavigation';

export default function Quiz() {
  const navigation = useNavigation<TUseNav>();

  return (
    <SafeWrapper>
      <View className="gap-8 my-auto">
        <View className="gap-4 mx-auto mt-auto items-center w-full">
          <Image source={require('@/assets/images/knowledge.png')} />
          <Button
            title="Knowledge"
            onPress={() => navigation.navigate(Screens.QuizKnowledge)}
          />
        </View>

        {/* <View className="gap-4 mx-auto items-center w-full">
          <Image source={require('@/assets/images/fight.png')} />
          <Button
            title="Fight"
            onPress={() => navigation.navigate(Screens.QuizFight)}
          />
        </View> */}
      </View>

      <AppNavigation />
    </SafeWrapper>
  );
}
