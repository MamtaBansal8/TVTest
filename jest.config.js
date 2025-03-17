module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
  ],
  moduleNameMapper: {
    '^@react-native-vector-icons/(.*)$': '<rootDir>/__mocks__/@react-native-vector-icons.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-reanimated|@react-native-tvos|virtualized-lists|@react-native-vector-icons|react-native-webview)/)',
  ],
};