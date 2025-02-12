import {View} from 'react-native';
import React, {useState} from 'react';
import SafeWrapper from '@/components/SafeWrapper';
import TextArea from '@/components/default/TextArea';
import Button from '@/components/default/Button';
import {useUserStore} from '@/state/userStore';
import {Screens, TUseNav} from '@/models/root';
import {useNavigation} from '@react-navigation/native';

export default function CreateAccount() {
  const navigation = useNavigation<TUseNav>();
  const setUser = useUserStore(state => state.setUser);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const isGoDisabled = login.length === 0 || password.length === 0;

  const handleReset = () => {
    setLogin('');
    setPassword('');
  };

  const handleGo = () => {
    setUser({login, password});
    navigation.navigate(Screens.Welcome);
  };

  return (
    <SafeWrapper>
      <View className="flex-1 items-center justify-center mx-auto w-full gap-4 mt-[50%]">
        <TextArea placeholder="Login" value={login} onChangeText={setLogin} />

        <TextArea
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <View className="w-2/3">
          <Button title="Reset" onPress={handleReset} />
        </View>

        <View className="w-full mt-auto">
          <Button title="Go" disabled={isGoDisabled} onPress={handleGo} />
        </View>
      </View>
    </SafeWrapper>
  );
}
