import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BoardPage from './pages/BoardPage';
import ServicesPage from './pages/ServicesPage';
import HospitalPage from './pages/HospitalPage';
import TradeManufacturingPage from './pages/TradeManufacturingPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<HomePage />} />
                            <Route path="about" element={<AboutPage />} />
                            <Route path="leadership" element={<BoardPage />} />
                            <Route path="services" element={<ServicesPage />} />
                            <Route path="hospital" element={<HospitalPage />} />
                            <Route path="industrial" element={<TradeManufacturingPage />} />
                            <Route path="contact" element={<ContactPage />} />
                        </Route>
                    </Routes>
                </Router>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
