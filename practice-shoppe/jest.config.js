// require('@babel/core').transformSync('code', {
//   plugins: ['babel-plugin-transform-vite-meta-env'],
// });

// eslint-disable-next-line no-undef
module.exports = {
  roots: ['src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+.(css|less|sass|scss|png|jpg|ttf|woff|woff2|webp)$': 'jest-transform-stub', // config to using styles
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageDirectory: 'coverage', // Custom folder name contain reports
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@fonts/(.*)$': '<rootDir>/src/fonts/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@type/(.*)$': '<rootDir>/src/type/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^@reducers/(.*)$': '<rootDir>/src/reducers/$1',
    '^@helper/(.*)$': '<rootDir>/src/helper/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
  },
  coveragePathIgnorePatterns: ['<rootDir>/src/components/Icons/(?!variables/.*)'],
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [1343],
      },
      astTransformers: {
        before: [
          {
            path: 'node_modules/ts-jest-mock-import-meta', // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
            options: {
              metaObjectReplacement: {
                url: 'http://localhost',
                env: { VITE_BASE_URL: 'http://localhost:3000' },
              },
            },
          },
        ],
      },
    },
  },
};
