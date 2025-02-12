import React, {useState} from 'react';
import Block from '@/components/default/Block';
import SafeWrapper from '@/components/SafeWrapper';
import AppNavigation from '@/components/AppNavigation';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Top5() {
  const [results, setResults] = useState<any[]>([
    {
      title: 'Lejla',

      result: 100,
    },
    {
      title: 'Tata',
      result: 90,
    },
    {
      title: 'Mery',
      result: 80,
    },
    {
      title: 'Magda',
      result: 70,
    },
    {
      title: 'Edyta',
      result: 60,
    },
  ]);

  return (
    <SafeWrapper>
      <View className="my-auto">
        <Block>
          <View className="gap-4">
            {results.map((result, index) => (
              <View className="flex-row gap-4" key={index}>
                <View className="rounded-2xl overflow-hidden flex-1">
                  <LinearGradient
                    colors={['#FFF327', '#F47015']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    className={'flex-1 w-full rounded-3xl '}>
                    <View className="items-center justify-center h-16 w-full">
                      <Text className="text-2xl font-bold">{result.title}</Text>
                    </View>
                  </LinearGradient>
                </View>

                <View className="rounded-2xl overflow-hidden">
                  <LinearGradient
                    colors={['#FFF327', '#F47015']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    className={'h-16 rounded-3xl items-center justify-center'}>
                    <View className="p-4">
                      <Text className="text-2xl font-bold">
                        {result.result}%
                      </Text>
                    </View>
                  </LinearGradient>
                </View>
              </View>
            ))}
          </View>
        </Block>
      </View>

      <AppNavigation />
    </SafeWrapper>
  );
}
