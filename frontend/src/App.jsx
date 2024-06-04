import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

<<<<<<< Updated upstream
import { useState } from 'react';
import Button from '@mui/material/Button';

import Test from './test';
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
>>>>>>> Stashed changes

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
<<<<<<< Updated upstream
    },
=======
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
>>>>>>> Stashed changes
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
<<<<<<< Updated upstream
            <div className='flex items-center justify-center h-screen'>
            <main>This app is using the dark mode</main>
            <Button variant="contained">Hello world</Button>
            <Test/>
            </div>
          
=======
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard/*" element={<Dashboard />} />
                   
                </Routes>
            </BrowserRouter>
>>>>>>> Stashed changes
        </ThemeProvider>
    );
}

export default App;
