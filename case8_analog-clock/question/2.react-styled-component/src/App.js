import React from 'react';
import GlobalStyles from './styles/global';
import Title from './component/Title';
import AnalogClock from './component/AnalogClock';

function App() {
    return (
        <>
            <GlobalStyles />
            <Title>Analog clock</Title>
            <AnalogClock />
        </>
    );
}

export default App;
