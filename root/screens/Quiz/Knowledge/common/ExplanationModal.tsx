import {View, Text} from 'react-native';
import React from 'react';

import Modal from '@/components/default/Modal';
import Button from '@/components/default/Button';

interface IncorrectAnswerModalProps {
  visible: boolean;
  onClose: () => void;
  explanation: string;
}

export default function ExplanationModal({
  visible,
  onClose,
  explanation,
}: IncorrectAnswerModalProps) {
  return (
    <Modal visible={visible} onClose={onClose}>
      <View className="gap-4 items-center max-w-96 mb-10">
        <Text className="text-3xl font-bold text-center">True!</Text>

        <Text className="text-center text-lg font-bold">{explanation}</Text>
      </View>

      <Button title="Play on" onPress={onClose} />
    </Modal>
  );
}
