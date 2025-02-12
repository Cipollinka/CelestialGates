import {View, Text, Image, Share} from 'react-native';
import React, {useState} from 'react';
import SafeWrapper from '@/components/SafeWrapper';
import Heading from '@/components/default/Heading';
import Button from '@/components/default/Button';
import AppNavigation from '@/components/AppNavigation';
import TextArea from '@/components/default/TextArea';
import LinearGradient from 'react-native-linear-gradient';
import {GOD_ANSWERS, GOD_IMAGES} from '@/constants/answers';

export default function PredictionAction({route}: {route: any}) {
  const god = route?.params?.god;
  const category = route?.params?.category;
  const label = route?.params?.label;

  const answer = GOD_ANSWERS[category];

  return (
    <SafeWrapper>
      <Heading title={label} className="mt-10" />
      <Image source={GOD_IMAGES[god]} className="mt-10 mb-4 mx-auto" />

      <View className="rounded-3xl overflow-hidden mb-4">
        <LinearGradient
          colors={['#FFF327', '#F47015']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className={'w-full'}>
          <View className="p-4">
            <Text className="text-2xl font-bold">"{answer}"</Text>
          </View>
        </LinearGradient>
      </View>

      <Button title="Share" onPress={() => Share.share({message: answer})} />

      <AppNavigation />
    </SafeWrapper>
  );
}
