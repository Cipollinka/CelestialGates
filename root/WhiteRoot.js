import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from '@/components/app/RootNavigation';
import BackgroundMusic from '@/components/app/BackgroundMusic';
import React from 'react';

export default  function WhiteRoot (){
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <SafeAreaProvider>
                <AppNavigator />
                <BackgroundMusic />
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}
