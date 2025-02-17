import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  isDisabledHidden?: boolean;
  width?: number | string;
}

export default function Button({
  title,
  onPress,
  disabled,
  isDisabledHidden,
  width,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {width: width || '100%'},
        disabled && !isDisabledHidden && styles.disabled,
      ]}>
      <AnimatedLinearGradient
        customColors={['#FFF327', '#F47015', '#FFB627', '#FF5733']}
        points={{start: {x: 0, y: 0}, end: {x: 1, y: 0}}}
        style={[
          styles.gradient,
          disabled && !isDisabledHidden && styles.disabled,
        ]}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </AnimatedLinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 64,
    borderRadius: 24,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 'auto',
    borderRadius: 24,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  disabled: {
    opacity: 0.4,
  },
});
