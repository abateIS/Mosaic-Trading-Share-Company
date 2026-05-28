import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './FeaturedServices.css';

const FeaturedServices = () => {
    const { t } = useLanguage();

    const hospitalServices = [
        { title: t('featured_hospital.service_1_title'), icon: "🏥", desc: t('featured_hospital.service_1_desc') },
        { title: t('featured_hospital.service_2_title'), icon: "🔬", desc: t('featured_hospital.service_2_desc') },
        { title: t('featured_hospital.service_3_title'), icon: "👨‍⚕️", desc: t('featured_hospital.service_3_desc') },
        { title: t('featured_hospital.service_4_title'), icon: "🚑", desc: t('featured_hospital.service_4_desc') }
    ];

    return (
        <section className="featured-services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t('featured_hospital.hero_tag')}</h2>
                    <div className="underline"></div>
                    <p className="section-subtitle">
                        {t('featured_hospital.hero_subtitle')}
                    </p>
                </div>
                <div className="sector-grid">
                    {hospitalServices.map((service, index) => (
                        <div key={index} className="sector-card">
                            <div className="sector-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="view-all-cta">
                    <Link to="/hospital" className="btn-primary">Explore Our Hospital</Link>
                    <Link to="/services" className="btn-secondary">View Future Investments</Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;
