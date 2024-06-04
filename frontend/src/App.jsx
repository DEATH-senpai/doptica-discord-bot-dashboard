import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

import { useState } from 'react';
import Button from '@mui/material/Button';

import Test from './test';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className='flex items-center justify-center h-screen'>
            <main>This app is using the dark mode</main>
            <Button variant="contained">Hello world</Button>
            <Test/>
            </div>
          
        </ThemeProvider>
    );
}

export default App;
