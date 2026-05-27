import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import HospitalSection from '../components/HospitalSection';
import heroBg from '../assets/universal_hero.png';
import './HospitalPage.css';

const HospitalPage = () => {
    const { t } = useLanguage();

    return (
        <div className="hospital-page">
            <div className="hero-header" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-header-overlay"></div>
                <div className="container hero-header-content">
                    <h1>{t('hospital.title')}</h1>
                    <p>{t('hospital.subtitle')}</p>
                </div>
            </div>

            <HospitalSection />

            <section className="hospital-details">
                <div className="container grid-3">
                    <div className="detail-item">
                        <div className="detail-icon">🏥</div>
                        <h3>{t('hospital.stat_diagnostics')}</h3>
                        <p>Fully equipped radiology and laboratory centers for precision medical testing.</p>
                    </div>
                    <div className="detail-item">
                        <div className="detail-icon">👨‍⚕️</div>
                        <h3>{t('hospital.stat_specialists')}</h3>
                        <p>A team of senior urologists, surgeons, and gynecologists dedicated to your health.</p>
                    </div>
                    <div className="detail-item">
                        <div className="detail-icon">🚑</div>
                        <h3>{t('hospital.stat_support')}</h3>
                        <p>Professional ambulance and emergency care services available around the clock.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HospitalPage;
