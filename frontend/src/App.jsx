import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',

        primary: {
            main: '#90caf9',
        },
        background: {
            default: '#0D1B42',
            paper: '#0D1B42',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard/*" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
