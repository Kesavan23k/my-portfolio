import { CustomThemeProvider } from './theme/ThemeContext';
import HomePage from './pages/Home';
import './index.css';

function App() {
  return (
    <CustomThemeProvider>
      <HomePage />
    </CustomThemeProvider>
  );
}

export default App;
