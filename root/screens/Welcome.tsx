import {View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import SafeWrapper from '@/components/SafeWrapper';
import Block from '@/components/default/Block';
import Button from '@/components/default/Button';
import {Screens, TUseNav} from '@/models/root';
import {useNavigation} from '@react-navigation/native';
import {useUserStore} from '@/state/userStore';

export default function Welcome() {
  const navigation = useNavigation<TUseNav>();

  const isFirstLogin = useUserStore(state => state.isFirstLogin);
  const setIsFirstLogin = useUserStore(state => state.setIsFirstLogin);

  useLayoutEffect(() => {
    if (isFirstLogin) {
      navigation.navigate(Screens.Bonus);
    }
  }, []);

  return (
    <SafeWrapper>
      <View className="my-auto gap-4">
        <Block>
          <Text className="text-2xl font-bold">
            We’re delighted to have you in our app, dedicated to the fascinating
            world of gods and mythical culture. Here, you’ll immerse yourself in
            ancient legends, mysterious myths, and the mighty deities that
            shaped human history. Enjoy your journey through time and space as
            you uncover new knowledge and experiences. We hope our app inspires
            you to make new discoveries and embark on exciting explorations.
            Let’s uncover the secrets of the mythical world together!
          </Text>
        </Block>
        <Button
          title="Unlock the Gates"
          onPress={() => {
            navigation.navigate(Screens.Bonus);
            setIsFirstLogin(true);
          }}
        />
      </View>
    </SafeWrapper>
  );
}
