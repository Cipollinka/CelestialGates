import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import SafeWrapper from '@/components/SafeWrapper';
import Heading from '@/components/default/Heading';
import Button from '@/components/default/Button';
import {PredictionAction, Screens, TUseNav} from '@/models/root';
import {useNavigation} from '@react-navigation/native';
import AppNavigation from '@/components/AppNavigation';

export default function Prediction() {
  const navigation = useNavigation<TUseNav>();

  const handleSelectGod = (god: PredictionAction) => {
    navigation.navigate(Screens.PredictionCategory, {god});
  };

  return (
    <SafeWrapper>
      <Heading
        title="Choose the god in which you want to ask a question"
        className="!text-[40px] leading-10"
      />
      <ScrollView showsVerticalScrollIndicator={false} className="mb-4">
        <View className="flex-row justify-center gap-x-4 gap-y-10 flex-wrap mt-10">
          <View className="gap-4">
            <Image source={require('@/assets/images/prediction/zeus.png')} />
            <Button
              title="Zeus"
              onPress={() => handleSelectGod(PredictionAction.Zeus)}
            />
          </View>
          <View className="gap-4">
            <Image
              source={require('@/assets/images/prediction/aphrodite.png')}
            />

            <Button
              title="Aphrodite"
              onPress={() => handleSelectGod(PredictionAction.Aphrodite)}
            />
          </View>
          <View className="gap-4">
            <Image source={require('@/assets/images/prediction/athena.png')} />

            <Button
              title="Athena"
              onPress={() => handleSelectGod(PredictionAction.Athena)}
            />
          </View>
          <View className="gap-4">
            <Image
              source={require('@/assets/images/prediction/poseidon.png')}
            />
            <Button
              title="Poseidon"
              onPress={() => handleSelectGod(PredictionAction.Poseidon)}
            />
          </View>
        </View>
      </ScrollView>

      <AppNavigation />
    </SafeWrapper>
  );
}
