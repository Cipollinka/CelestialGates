import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';

interface HeadingProps {
  title: string;
  variant?: 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: 'light' | 'dark' | 'accent';
  className?: string;
}

export default function Heading({
  title,
  variant = 'h1',
  color = 'light',
  className,
}: HeadingProps) {
  const getSize = () => {
    switch (variant) {
      case 'h0':
        return 48;
      case 'h1':
        return 36;
      case 'h2':
        return 32;
      case 'h3':
        return 28;
      case 'h4':
        return 24;
      case 'h5':
        return 20;
      case 'h6':
        return 16;
      default:
        return 40;
    }
  };

  const getColors = () => {
    switch (color) {
      case 'light':
        return ['#FFF9F0', '#E6B8D9'];
      case 'dark':
        return ['#9F2B68', '#B565A7'];
      case 'accent':
        return ['#FFD700', '#FFA500'];
      default:
        return ['#FFF9F0', '#E6B8D9'];
    }
  };

  return (
    <View style={styles.container} className={className}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, {fontSize: getSize()}]}>{title}</Text>
      </View>
      <View style={styles.gradient}>
        <AnimatedLinearGradient
          customColors={getColors()}
          points={{start: {x: 0, y: 0}, end: {x: 1, y: 0}}}
          style={styles.gradient}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
  },
  textContainer: {
    zIndex: 1,
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 16,
    overflow: 'hidden',
  },
  text: {
    color: '#1A0B2E',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
});
