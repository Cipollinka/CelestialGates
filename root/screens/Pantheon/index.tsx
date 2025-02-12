import {View, Image, ScrollView} from 'react-native';
import React from 'react';
import {PantheonGod, PredictionAction, Screens, TUseNav} from '@/models/root';
import {useNavigation} from '@react-navigation/native';
import SafeWrapper from '@/components/SafeWrapper';
import Button from '@/components/default/Button';
import {PANTHEON_GODS_IMAGES} from '@/constants/pantheon';
import AppNavigation from '@/components/AppNavigation';
import Heading from '@/components/default/Heading';

interface GodCardProps {
  image: any;
  god: PantheonGod;
  title: string;
  onPress: (god: PantheonGod) => void;
}

const GodCard = ({image, god, title, onPress}: GodCardProps) => {
  return (
    <View className="gap-4">
      <Image source={image} />

      <Button title={title} onPress={() => onPress(god)} />
    </View>
  );
};

export default function Pantheon() {
  const navigation = useNavigation<TUseNav>();

  const onPress = (god: PantheonGod) => {
    navigation.navigate(Screens.GodInfo, {god});
  };

  return (
    <SafeWrapper>
      <Heading title="Pantheon" />
      <ScrollView showsVerticalScrollIndicator={false} className="mb-4">
        <View className="flex-row flex-wrap justify-center gap-4">
          {Object.entries(PANTHEON_GODS_IMAGES).map(([god, {image, title}]) => (
            <GodCard
              image={image}
              god={god as PantheonGod}
              title={title}
              onPress={onPress}
              key={god}
            />
          ))}
        </View>
      </ScrollView>

      <AppNavigation />
    </SafeWrapper>
  );
}
