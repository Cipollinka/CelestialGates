import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SafeWrapper from '@/components/SafeWrapper';
import Block from '@/components/default/Block';
import AppNavigation from '@/components/AppNavigation';
export default function AboutUs() {
  return (
    <SafeWrapper>
      <ScrollView showsVerticalScrollIndicator={false} className="mb-4">
        <Block>
          <Text className="text-2xl font-bold">
            Quiz of the Celestial Gates is an engaging app that offers unique
            quizzes on the theme of deities from various civilizations. Our
            mission is to immerse you in the fascinating world of myths and
            legends, helping you learn more about the deities that shaped the
            beliefs and cultures of ancient peoples.
          </Text>
          <Text className="text-2xl font-bold">What We Offer:</Text>
          <Text className="text-2xl font-bold">
            • A Wide Range of Topics: From Greek and Roman gods to Norse and
            Indian deities, our quizzes cover diverse pantheons and myths.
          </Text>
          <Text className="text-2xl font-bold">
            • Interactive Experience: Test your knowledge by playing quizzes
            that require you to determine whether events occurred before or
            after a specific year.
          </Text>
          <Text className="text-2xl font-bold">
            • Education and Entertainment: Each question is accompanied by an
            explanation to help you learn more about the deities and their
            historical context.
          </Text>
          <Text className="text-2xl font-bold">
            • Artifact Collection: Collect virtual artifacts representing
            various divine powers and symbols, and expand your collection.
          </Text>

          <Text className="text-2xl font-bold mt-4">Why Choose Us:</Text>
          <Text className="text-2xl font-bold">
            • User-Friendly: An easy-to-use interface that allows you to quickly
            dive into the game.
          </Text>
          <Text className="text-2xl font-bold">
            • Educational Value: Gain a deeper understanding of history and
            culture through engaging and informative quizzes.
          </Text>
          <Text className="text-2xl font-bold">
            Join us and discover the captivating world of deities!
          </Text>
        </Block>
      </ScrollView>

      <AppNavigation />
    </SafeWrapper>
  );
}
