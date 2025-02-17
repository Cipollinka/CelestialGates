import {View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import SafeWrapper from '@/components/SafeWrapper';
import Button from '@/components/default/Button';
import Heading from '@/components/default/Heading';
import {Screens, TUseNav} from '@/models/root';
import {useNavigation} from '@react-navigation/native';
import {useUserStore} from '@/state/userStore';

export default function HomeScreen() {
  const navigation = useNavigation<TUseNav>();
  const user = useUserStore(state => state.user);

  useLayoutEffect(() => {
    if (user.password) {
      handleLater();
    }
  }, []);

  const handleLogin = () => {
    navigation.navigate(Screens.CreateAccount);
  };

  const handleLater = () => {
    navigation.navigate(Screens.Welcome);
  };

  return (
    <SafeWrapper>
      <View className="flex-1 items-center justify-center w-full mx-auto">
        <Heading
          title="Save your progress and statistics"
          className="text-center"
        />
        <View className="w-full gap-4 mt-14">
          <Button title="Log in" onPress={handleLogin} />
          <Button title="Later" onPress={handleLater} />
        </View>
      </View>
    </SafeWrapper>
  );
}
