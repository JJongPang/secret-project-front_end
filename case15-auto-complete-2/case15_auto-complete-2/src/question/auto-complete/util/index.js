export const debounce = (callback, delayTime) => {
    let timeout = null;
    return (...args) => {
        // q2. debounce 기능을 구현하시오.
        // TODO: Write JS code here!'
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            callback(...args);
            if (timeout) clearTimeout(timeout);
        }, delayTime);
    };
};
