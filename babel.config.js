module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './root/',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
