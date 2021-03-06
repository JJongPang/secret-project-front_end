const getRandomSeconds = () => (Math.round(Math.random() * 5) + 1) * 250;

export const randomTimer = (func, ...args) => (resolve) => {
    setTimeout(() => resolve(func(...args)), getRandomSeconds());
};

export const debounce = (func, delay) => {
    let timeoutId = null;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func.bind(null, ...args), delay);
    };
};

export const dummyFetcher = (method, args) => new Promise(randomTimer(method, args));
