import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigation from '@/components/app/RootNavigation';

import './global.css';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
