// eslint-disable-next-line no-undef
module.exports = {
  roots: ['src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+.(css|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub', // config to using styles
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // config to using methods of jest-dom library
  collectCoverage: true,
  coverageDirectory: 'coverage', // Custom folder name contain reports
  moduleNameMapper: {
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/image.js',
    '^@assets(.*):': '<rootDir>/src/assets$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@enums/(.*)$': '<rootDir>/src/enums/$1',
    '^@themes(.*)$': '<rootDir>/src/themes$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
  },
};
