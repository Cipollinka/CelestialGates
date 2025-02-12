import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SafeWrapper from '@/components/SafeWrapper';
import AppNavigation from '@/components/AppNavigation';
import {useNavigation} from '@react-navigation/native';
import {TUseNav} from '@/models/root';
import Block from '@/components/default/Block';
import Button from '@/components/default/Button';

export default function LibraryContent({route}: {route: any}) {
  const navigation = useNavigation<TUseNav>();
  const book = route?.params?.book;

  return (
    <SafeWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block>
          <Text className="text-3xl font-bold mx-auto text-center">
            {book.title}
          </Text>
          <Text className="text-2xl font-bold mt-10">{book.description}</Text>
        </Block>
      </ScrollView>

      <View className="my-4">
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>

      <AppNavigation />
    </SafeWrapper>
  );
}
