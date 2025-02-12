import {Modal as RNModal, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import Block from './Block';

interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  children: ReactNode;
}

export default function Modal({visible, onClose, children}: ModalProps) {
  return (
    <RNModal
      visible={visible}
      transparent
      animationType="fade"
      className="z-10"
      onRequestClose={onClose}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        className="flex-1 bg-black/50 justify-center items-center z-20">
        <TouchableOpacity activeOpacity={1}>
          <Block>{children}</Block>
        </TouchableOpacity>
      </TouchableOpacity>
    </RNModal>
  );
}
