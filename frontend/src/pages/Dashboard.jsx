import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/ui/MainContent';
import MainContent2 from '../components/ui/MainContent2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div className=''>
            <Header />
            <div className="app-container">
                <Sidebar />
               
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/profile" element={<MainContent2 />} />
                </Routes>
           
            </div>
        </div>
    );
}
