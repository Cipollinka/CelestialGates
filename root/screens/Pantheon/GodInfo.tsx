import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SafeWrapper from '@/components/SafeWrapper';
import {TUseNav, Screens} from '@/models/root';
import {useNavigation} from '@react-navigation/native';
import Button from '@/components/default/Button';
import {PANTHEON_TEXT} from '@/constants/pantheon';
import AppNavigation from '@/components/AppNavigation';

export default function GodInfo({route}: {route: any}) {
  const navigation = useNavigation<TUseNav>();
  const god = route?.params?.god;

  const godText = PANTHEON_TEXT[god];

  return (
    <SafeWrapper>
      <ScrollView className="mb-2" showsVerticalScrollIndicator={false}>
        <View className="bg-[#B897C5] p-4 rounded-2xl overflow-hidden gap-2 mb-4 mt-2">
          <Text className="text-3xl font-bold mx-auto">{godText.title}</Text>
          <Text className="font-bold">
            <Text className="text-xl"> Role:</Text> {godText.role}
          </Text>
          <Text className="font-bold">
            <Text className="text-xl"> Symbols:</Text> {godText.symbols}
          </Text>
          <Text className="font-bold">
            <Text className="text-xl"> Character:</Text>
            {godText.character}
          </Text>
          <Text className="font-bold">
            <Text className="text-xl"> Myths:</Text>

            {godText.myths.map(myth => myth).join(', ')}
          </Text>
          <Text className="font-bold">
            <Text className="text-xl"> Special Feature:</Text>
            {godText.specialFeature}
          </Text>
        </View>
      </ScrollView>
      <View className="mb-2">
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>

      <AppNavigation />
    </SafeWrapper>
  );
}
