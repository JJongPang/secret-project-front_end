import { useState } from 'react';
import BodyBlackout from './BodyBlackout';
import Modal from './Modal';

function App() {
    // true 이면 팝업과 blackout 이 보이게 한다.
    const [isVisible, setIsVisble] = useState(false);

    // onSetIsVisible 함수를 구현해서 함수형태로 넘긴다
    const onSetIsVisible = (active) => {
        setIsVisble(active);
    };

    return (
        <div className="App">
            <BodyBlackout isVisible={isVisible} onSetIsVisible={onSetIsVisible} />
            <Modal isVisible={isVisible} onSetIsVisible={onSetIsVisible} />

            <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => {
                    onSetIsVisible(true);
                }}
            >
                팝업을 엽니다.
            </button>
        </div>
    );
}

export default App;
