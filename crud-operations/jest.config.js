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
    '@test-utils': '<rootDir>/src/utils/testUtils.tsx',
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/src/icons/',
    '<rootDir>/src/constants/',
    '<rootDir>/src/themes/',
    '<rootDir>/src/types/',
    '<rootDir>/src/services/index.ts',
    '<rootDir>/src/utils/index.ts',
    '<rootDir>/src/pages/index.ts',
    '<rootDir>/src/components/index.ts',
    // '<rootDir>/src/components/*/*.stories.tsx',
    '<rootDir>/src/hooks/index.ts',
    '<rootDir>/src/App.tsx',
    '<rootDir>/src/main.tsx',
    '<rootDir>/src/vite-env.d.ts',
  ],
};