module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@': './root/',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
          '.svg',
        ],
      },
    ],
    'react-native-reanimated/plugin',
    ['@babel/plugin-transform-runtime'],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
