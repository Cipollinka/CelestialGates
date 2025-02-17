import {View, Text} from 'react-native';
import React from 'react';
import HeartFilledIcon from '@/assets/icons/nav/heart_filled.svg';
import HeartUnfilledIcon from '@/assets/icons/nav/heart_unfilled.svg';
import BrokenHeartIcon from '@/assets/icons/nav/broken-heart.svg';

import Modal from '@/components/default/Modal';
import Button from '@/components/default/Button';

interface IncorrectAnswerModalProps {
  visible: boolean;
  onClose: () => void;
  lives: number;
}

export default function IncorrectAnswerModal({
  visible,
  onClose,
  lives,
}: IncorrectAnswerModalProps) {
  return (
    <Modal visible={visible} onClose={onClose}>
      <View className="gap-4 items-center">
        <BrokenHeartIcon />
        <Text className="text-3xl font-bold text-center">
          Your answer is incorrect!
        </Text>

        <Text className="text-center text-lg font-bold">
          You have {lives} lives left
        </Text>

        <View className="flex-row gap-4 mx-auto mt-4 mb-10 items-center">
          {Array.from({length: 3}).map((_, index) => (
            <View key={index}>
              {lives > index ? <HeartFilledIcon /> : <HeartUnfilledIcon />}
            </View>
          ))}
        </View>
      </View>

      <Button title="Play on" onPress={onClose} />
    </Modal>
  );
}
