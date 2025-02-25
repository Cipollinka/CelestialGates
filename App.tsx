import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from '@/components/app/RootNavigation';
import BackgroundMusic from '@/components/app/BackgroundMusic';

import './global.css';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <AppNavigator />
        <BackgroundMusic />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
