const getItemLocalStorage = (key: string) => {
  const localStorageData = localStorage.getItem(key);

  return localStorageData ? JSON.parse(localStorageData) : null;
};

const setItemLocalStorage = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const removeItemLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export { getItemLocalStorage, setItemLocalStorage, removeItemLocalStorage };
