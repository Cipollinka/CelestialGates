import {View} from 'react-native';
import React from 'react';
import SafeWrapper from '@/components/SafeWrapper';
import {useNavigation} from '@react-navigation/native';
import {Screens, TUseNav, QuizKnowledgeAction} from '@/models/root';
import Button from '@/components/default/Button';
import AppNavigation from '@/components/AppNavigation';

export default function Knowledge() {
  const navigation = useNavigation<TUseNav>();

  const handlePress = (action: QuizKnowledgeAction) => {
    navigation.navigate(Screens.QuizKnowledgeAction, {action});
  };

  return (
    <SafeWrapper>
      <View className="gap-4 my-auto pt-20">
        <Button
          title="Greek Gods"
          onPress={() => handlePress(QuizKnowledgeAction.GreekGods)}
        />
        <Button
          title="Roman Gods"
          onPress={() => handlePress(QuizKnowledgeAction.RomanGods)}
        />
        <Button
          title="Indian Gods"
          onPress={() => handlePress(QuizKnowledgeAction.IndianGods)}
        />
        <Button
          title="Norse Gods"
          onPress={() => handlePress(QuizKnowledgeAction.NorseGods)}
        />
      </View>

      <AppNavigation />
    </SafeWrapper>
  );
}
