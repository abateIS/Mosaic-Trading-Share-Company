import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './FeaturedServices.css';

const hospitalServices = [
    { title: "Specialized Medical Centers", icon: "🏥", desc: "First level specialized hospital medical service centers and clinics." },
    { title: "Diagnostic Excellence", icon: "🔬", desc: "Advanced laboratory and radiology centers for precision diagnostics." },
    { title: "Specialized Care", icon: "👨‍⚕️", desc: "Dedicated care centers for chronic illness and aging-related health problems." },
    { title: "Emergency Operations", icon: "🚑", desc: "Professional ambulance and senior specialist intervention 24/7." }
];

const FeaturedServices = () => {
    const { t } = useLanguage();

    return (
        <section className="featured-services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Current Focus: Healthcare Excellence</h2>
                    <div className="underline"></div>
                    <p className="section-subtitle">
                        Mosaic Trading S.C. is currently pioneering premium healthcare through
                        <strong> Mosaic-Furi General Hospital</strong>.
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
