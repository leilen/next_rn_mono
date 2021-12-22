const withPlugins = require('next-compose-plugins');
const path = require('path');
const withTM = require('next-transpile-modules')(
  [
    'react-native',
  ],
);

module.exports = withPlugins([withTM], {
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
      '@dependent': path.join(__dirname, 'dependent'),
    }
    config.resolve.extensions = [
      '.web.ts',
      '.web.tsx',
      '.ts',
      '.tsx',
      '.web.js',
      '.web.jsx',
      '.js',
      '.jsx',
      ...config.resolve.extensions,
    ]
    return config;
  }
});
