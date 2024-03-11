export default {
  displayName: 'crud-operations',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
  moduleNameMapper: {
    '@constants': '<rootDir>/src/constants',
    '@icons': '<rootDir>/src/icons',
    '@components': '<rootDir>/src/components',
    '@layouts': '<rootDir>/src/layouts',
    '@utils': '<rootDir>/src/utils',
    '@pages': '<rootDir>/src/pages',
    '@hooks': '<rootDir>/src/hooks',
    '@types': '<rootDir>/src/types',
    '@services': '<rootDir>/src/services',
    // "@*": '<rootDir>/src/*'
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
};
