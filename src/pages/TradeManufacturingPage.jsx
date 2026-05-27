import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import heroBg from '../assets/industrial_trading_premium.png';
import './TradeManufacturingPage.css';

const TradeManufacturingPage = () => {
    const { t } = useLanguage();

    return (
        <div className="trade-page">
            <div className="hero-header" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-header-overlay"></div>
                <div className="container hero-header-content">
                    <h1>{t('industrial.title')}</h1>
                    <p>{t('industrial.subtitle')}</p>
                </div>
            </div>

            <section className="trade-sectors">
                <div className="container">
                    <div className="sector-grid">
                        <div className="sector-card">
                            <h3>{t('industrial.import')}</h3>
                            <p>Global logistics and distribution of high-quality pharmaceutical and electronic imports.</p>
                        </div>
                        <div className="sector-card">
                            <h3>{t('industrial.manufacturing')}</h3>
                            <p>State-of-the-art production facilities for essential health and consumer products.</p>
                        </div>
                        <div className="sector-card">
                            <h3>{t('industrial.agriculture')}</h3>
                            <p>Sustainable farming and modern marketing of agricultural products.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TradeManufacturingPage;
