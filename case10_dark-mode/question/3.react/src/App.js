import './App.css';
import GlobalStyle from './styles/globla';
import { Article, Title, ToggleBtn } from './component';
import useTheme from './hooks/useTheme';
import themeStyle from './styles/theme';

// 테마 프로바이더
import { ThemeProvider } from 'styled-components';

function App() {
    const [theme, toggleTheme] = useTheme();
    return (
        <ThemeProvider theme={themeStyle[theme]}>
            <GlobalStyle />
            <Title>Light / Dark Mode - Toggle Button</Title>
            <ToggleBtn onClick={toggleTheme} />
            <Article>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum optio ab porro magni in sunt ipsam, doloremque minima,
                itaque sapiente consequatur, repellat velit voluptatum accusantium aperiam. Nostrum sunt reprehenderit nemo!
            </Article>
        </ThemeProvider>
    );
}

export default App;
