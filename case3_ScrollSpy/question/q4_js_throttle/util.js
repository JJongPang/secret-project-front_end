export const debounce = (func, delay) => {
  let timeoutId = null;
  return (...arg) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...arg), delay);
  };
};

export const throttle = (func, ms) => {
  let throttled = false;
  // do something
};
