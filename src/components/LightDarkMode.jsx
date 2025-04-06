import '../css/LightDarkMode.css';
import useLocalStorage from './useLocalStorage';

function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage('theme', "dark");

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="light-dark-mode">
            <div className="container">
                <p>Hello World!</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    )
}

export default LightDarkMode;