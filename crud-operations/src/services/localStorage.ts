export const getItemLocalStorage = (key: string) => {
  try {
    const localStorageData = localStorage.getItem(key);

    return localStorageData ? JSON.parse(localStorageData) : null;
  } catch (error) {
    return {
      status: 'error',
    };
  }
};

export const setItemLocalStorage = <T>(key: string, data: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    return {
      status: 'error',
    };
  }
};

export const removeItemLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    return {
      status: 'error',
    };
  }
};
