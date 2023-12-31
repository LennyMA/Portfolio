export const setToLS = (key, value) => {
  // window.localStorage.setItem(key, JSON.stringify(value));
  window.localStorage.setItem(key, value);
};

export const getFromLS = (key) => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return value;
  }
};
