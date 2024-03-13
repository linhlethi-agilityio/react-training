import { getItemLocalStorage, setItemLocalStorage, removeItemLocalStorage } from '..';

// Mocking localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('localStorageUtils', () => {
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
  });

  // Test getItemLocalStorage
  test('getItemLocalStorage returns null if key does not exist in localStorage', () => {
    expect(getItemLocalStorage('nonexistentKey')).toBeNull();
  });

  test('getItemLocalStorage returns parsed data if key exists in localStorage', () => {
    const data = { value: 42 };
    localStorage.setItem('existingKey', JSON.stringify(data));
    expect(getItemLocalStorage('existingKey')).toEqual(data);
  });

  // Test setItemLocalStorage
  test('setItemLocalStorage sets item in localStorage', () => {
    const data = { value: 42 };
    setItemLocalStorage('testKey', data);
    expect(localStorage.setItem).toHaveBeenCalledWith('testKey', JSON.stringify(data));
  });

  // Test removeItemLocalStorage
  test('removeItemLocalStorage removes item from localStorage', () => {
    localStorage.setItem('testKey', 'testValue');
    removeItemLocalStorage('testKey');
    expect(localStorage.removeItem).toHaveBeenCalledWith('testKey');
    expect(localStorage.getItem('testKey')).toBeNull();
  });
});
