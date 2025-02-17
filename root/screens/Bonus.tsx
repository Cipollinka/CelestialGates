import {View, Text, Image, ScrollView} from 'react-native';
import React, {useLayoutEffect} from 'react';
import SafeWrapper from '@/components/SafeWrapper';
import Block from '@/components/default/Block';
import Button from '@/components/default/Button';
import {Screens, TUseNav} from '@/models/root';
import {useNavigation} from '@react-navigation/native';
import {BONUSES} from '@/constants/bonuses';
import {useUserStore} from '@/state/userStore';

export default function Bonus() {
  const navigation = useNavigation<TUseNav>();
  const collectedBonuses = useUserStore(state => state.collectedBonuses);
  const setCollectedBonuses = useUserStore(state => state.setCollectedBonuses);
  const lastBonusClaim = useUserStore(state => state.lastBonusClaim);
  const setLastBonusClaim = useUserStore(state => state.setLastBonusClaim);

  const currentBonusIndex = Math.min(
    collectedBonuses.length,
    BONUSES.length - 1,
  );
  const currentBonus = BONUSES[currentBonusIndex];

  useLayoutEffect(() => {
    const canClaimToday = () => {
      if (!lastBonusClaim) return true;

      const lastClaimDate = new Date(lastBonusClaim);
      const currentDate = new Date();

      lastClaimDate.setHours(0, 0, 0, 0);
      currentDate.setHours(0, 0, 0, 0);

      return lastClaimDate < currentDate;
    };

    if (!canClaimToday() || collectedBonuses.length >= BONUSES.length) {
      navigation.navigate(Screens.Main);
    }
  }, [lastBonusClaim, collectedBonuses.length, navigation]);

  const handleCollectBonus = () => {
    if (currentBonus) {
      const newCollectedBonuses = [...collectedBonuses, currentBonus.id];
      setCollectedBonuses(newCollectedBonuses);

      setLastBonusClaim(new Date().toISOString());

      navigation.navigate(Screens.Main);
    }
  };

  return (
    <SafeWrapper>
      <ScrollView showsVerticalScrollIndicator={false} className="mt-4">
        <View className="my-auto gap-4">
          <Block>
            <Text className="text-2xl font-bold">
              A new bonus is available! Collect your daily reward and discover
              more about mythical artifacts.
            </Text>
          </Block>

          <View className="items-center gap-4 my-4">
            <Text className="text-2xl font-bold text-white">
              {currentBonus.title}
            </Text>
            <Image
              source={currentBonus.image}
              className="w-[144px] h-[144px]"
            />
          </View>

          <Block>
            <Text className="text-2xl font-bold">
              {currentBonus.description}
            </Text>
            <Text className="text-2xl font-bold">
              Fact: {currentBonus.fact}
            </Text>
          </Block>

          <Button title="Collect" onPress={handleCollectBonus} />
        </View>
      </ScrollView>
    </SafeWrapper>
  );
}
