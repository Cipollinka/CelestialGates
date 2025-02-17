const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const {withNativeWind} = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    experimentalImportSupport: false,
    inlineRequires: true,
    minifierPath: 'metro-minify-terser',
    minifierConfig: {
      // Terser options
      compress: {
        drop_console: true,
        drop_debugger: true,
        dead_code: true,
        unused: true,
      },
      mangle: {
        toplevel: true,
        keep_classnames: true,
        keep_fnames: false,
      },
      output: {
        ascii_only: true,
        quote_style: 1,
        wrap_iife: true,
      },
    },
  },
  resolver: {
    assetExts: [
      ...defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
      'db',
      'mp3',
      'ttf',
      'obj',
      'png',
      'jpg',
      'jpeg',
    ],
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
    resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
    // Additional module paths
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.join(__dirname, `node_modules/${name}`),
      },
    ),
  },
  watchFolders: [
    path.resolve(__dirname, '../'),
    path.resolve(__dirname, 'node_modules'),
  ],
  maxWorkers: 4,
  resetCache: true,
  cacheVersion: '1.0',
};

module.exports = wrapWithReanimatedMetroConfig(
  withNativeWind(mergeConfig(defaultConfig, config), {input: './global.css'}),
);
