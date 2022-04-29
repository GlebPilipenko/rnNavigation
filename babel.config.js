const path = require('path');

const root = path.resolve(__dirname);

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: true,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: [root],
        alias: {
          '@root': `${root}/src`,
        },
        extensions: ['.js', '.jsx', 'ts', '.tsx', '.ios.js', '.android.js'],
      },
    ],
  ],
};
