import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SafeWrapper from '@/components/SafeWrapper';
import {EPredictionCategory, Screens, TUseNav} from '@/models/root';
import {useNavigation} from '@react-navigation/native';
import Heading from '@/components/default/Heading';
import Button from '@/components/default/Button';
import AppNavigation from '@/components/AppNavigation';

const categories = [
  {
    id: EPredictionCategory.LOVE,
    name: 'Love',
  },
  {
    id: EPredictionCategory.CAREER,
    name: 'Career',
  },
  {
    id: EPredictionCategory.HEALTH,
    name: 'Health',
  },
  {
    id: EPredictionCategory.WISDOM,
    name: 'Wisdom',
  },
  {
    id: EPredictionCategory.TRAVELS,
    name: 'Travels',
  },
  {
    id: EPredictionCategory.WEALTH,
    name: 'Wealth',
  },
];

export default function PredictionCategory({route}: {route: any}) {
  const navigation = useNavigation<TUseNav>();
  const god = route?.params?.god;

  const handleSelectCategory = (category: any) => {
    navigation.navigate(Screens.PredictionAction, {
      god,
      category: category.id,
      label: category.name,
    });
  };

  return (
    <SafeWrapper>
      <Heading title="Choose a category" className="mt-10" />

      <View className="items-center w-full mx-auto gap-4 my-auto">
        {categories.map(category => (
          <Button
            title={category.name}
            key={category.id}
            onPress={() => handleSelectCategory(category)}
          />
        ))}
      </View>

      <AppNavigation />
    </SafeWrapper>
  );
}
