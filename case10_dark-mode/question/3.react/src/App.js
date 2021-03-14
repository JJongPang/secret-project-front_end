import './App.css';
import Article from './component/Article';
import Title from './component/Title';
import ToggleBtn from './component/ToggleButton';
import GlobalStyle from './styles/globla';

function App() {
    return (
        <>
            <GlobalStyle />
            <Title>Light / Dark Mode - Toggle Button</Title>
            <ToggleBtn />
            <Article>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum optio ab porro magni in sunt ipsam, doloremque minima,
                itaque sapiente consequatur, repellat velit voluptatum accusantium aperiam. Nostrum sunt reprehenderit nemo!
            </Article>
        </>
    );
}

export default App;
