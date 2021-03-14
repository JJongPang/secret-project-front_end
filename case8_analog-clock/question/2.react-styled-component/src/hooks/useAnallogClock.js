import { useEffect, useRef } from 'react';

const useAnalogClock = () => {
    // 참조값
    const $hourHand = useRef(null);
    const $minuteHand = useRef(null);
    const $secondHand = useRef(null);

    useEffect(() => {
        const timeId = setInterval(() => {
            const now = new Date();

            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            $secondHand.current.style.setProperty('--deg', seconds * 6);
            $minuteHand.current.style.setProperty('--deg', minutes * 6 + seconds * 0.1);
            $hourHand.current.style.setProperty('--deg', hours * 30 + minutes * 0.5 + seconds * 0.1);
        }, 1000);

        // cleanUp
        return () => {
            clearInterval(timeId);
        };
    }, []);

    return [$hourHand, $minuteHand, $secondHand];
};

export default useAnalogClock;
