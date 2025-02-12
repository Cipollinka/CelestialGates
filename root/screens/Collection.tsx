import {View, Image, ScrollView} from 'react-native';
import React from 'react';
import {PantheonGod, Screens, TUseNav} from '@/models/root';
import {useNavigation} from '@react-navigation/native';
import SafeWrapper from '@/components/SafeWrapper';
import Button from '@/components/default/Button';
import AppNavigation from '@/components/AppNavigation';
import {BONUSES} from '@/constants/bonuses';
import {useUserStore} from '@/state/userStore';

interface BonusCardProps {
  image: any;
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

const BonusCard = ({image, title, disabled, onPress}: BonusCardProps) => {
  return (
    <View className="gap-4">
      <Image source={image} />

      <Button
        title={title}
        onPress={() => onPress && onPress()}
        disabled={disabled}
        isDisabledHidden={disabled}
      />
    </View>
  );
};

export default function Collection() {
  const navigation = useNavigation<TUseNav>();

  const collectedBonuses = useUserStore(state => state.collectedBonuses);

  const isLibraryUnlocked = collectedBonuses.length >= BONUSES.length;

  return (
    <SafeWrapper>
      <ScrollView showsVerticalScrollIndicator={false} className="mb-4">
        <View className="flex-row flex-wrap justify-between gap-y-4 mx-auto">
          {BONUSES.filter(bonus => collectedBonuses.includes(bonus.id)).map(
            ({image, title}) => (
              <BonusCard
                image={image}
                disabled
                title={title}
                onPress={() => {}}
                key={title}
              />
            ),
          )}

          <BonusCard
            image={
              isLibraryUnlocked
                ? require('@/assets/images/bonuses/library_unlock.png')
                : require('@/assets/images/bonuses/library_lock.png')
            }
            disabled={!isLibraryUnlocked}
            title="Library"
            onPress={() => navigation.navigate(Screens.Library)}
            key="library"
          />
        </View>
      </ScrollView>

      <AppNavigation />
    </SafeWrapper>
  );
}
