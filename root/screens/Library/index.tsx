import {View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {MYTHS} from '@/constants/library';
import {Screens, TUseNav} from '@/models/root';
import {useNavigation} from '@react-navigation/native';
import SafeWrapper from '@/components/SafeWrapper';
import AppNavigation from '@/components/AppNavigation';

export default function Library() {
  const navigation = useNavigation<TUseNav>();

  return (
    <SafeWrapper>
      <ScrollView showsVerticalScrollIndicator={false} className="mb-4">
        <View className="flex-row flex-wrap gap-4 justify-center mt-10">
          {MYTHS.map(lib => (
            <TouchableOpacity
              key={lib.id}
              onPress={() =>
                navigation.navigate(Screens.LibraryContent, {book: lib})
              }>
              <Image source={require('@/assets/images/library.png')} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <AppNavigation />
    </SafeWrapper>
  );
}
