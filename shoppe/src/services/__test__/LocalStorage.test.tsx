import {
  getItemLocalStorage,
  removeItemLocalStorage,
  setItemLocalStorage,
} from '@services/LocalStorage';

describe('testing LocalStorage', () => {
  test('should get data from localStorage', () => {
    const key = 'test';
    const item = 'value';
    setItemLocalStorage(key, item);
    const result = getItemLocalStorage(key);
    expect(result).toEqual(item);
  });

  test('should remove data from localStorage', () => {
    const key = 'test';
    setItemLocalStorage(key, 'value');
    removeItemLocalStorage(key);
    const result = getItemLocalStorage(key);
    expect(result).toEqual(null);
  });

  test('should set an item to localStorage', () => {
    const key = 'test';
    const item = 'value';
    setItemLocalStorage(key, item);
    const result = getItemLocalStorage(key);
    expect(result).toEqual(item);
  });
});
