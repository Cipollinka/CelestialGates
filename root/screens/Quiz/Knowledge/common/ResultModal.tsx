import {View, Text, Share} from 'react-native';
import React from 'react';

import Modal from '@/components/default/Modal';
import Button from '@/components/default/Button';

interface ResultModalProps {
  visible: boolean;
  onClose: () => void;
  result: number;
}

export default function ResultModal({
  visible,
  onClose,
  result,
}: ResultModalProps) {
  return (
    <Modal visible={visible} onClose={onClose}>
      <View className="gap-4 items-center">
        <View className="gap-4 items-center">
          <Text className="text-3xl font-bold text-center">Your result is</Text>

          <Text className="text-center text-2xl font-bold">{result}</Text>
        </View>
        <View className="flex-row gap-4">
          <Button title="Go back" onPress={onClose} width={150} />
          <Button
            width={150}
            title="Share"
            onPress={() => Share.share({message: `My result is: ${result}!`})}
          />
        </View>
      </View>
    </Modal>
  );
}
