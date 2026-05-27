import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedServices.css';

const sectors = [
    { title: "Medical Sector", icon: "🏥", desc: "Flagship specialized hospital services, diagnostic centers, and wellness facilities." },
    { title: "Education", icon: "🎓", desc: "Primary/secondary schools and professional medical colleges." },
    { title: "Trade & Import", icon: "🚢", desc: "Global import-export of medical supplies and electronics." },
    { title: "Manufacturing", icon: "🏭", desc: "Local production of pharmaceuticals and medical equipment." }
];

const FeaturedServices = () => {
    return (
        <section className="featured-services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Key Business Sectors</h2>
                    <div className="underline"></div>
                </div>
                <div className="sector-grid">
                    {sectors.map((sector, index) => (
                        <div key={index} className="sector-card">
                            <div className="sector-icon">{sector.icon}</div>
                            <h3>{sector.title}</h3>
                            <p>{sector.desc}</p>
                            <Link to="/services" className="learn-more">Learn More →</Link>
                        </div>
                    ))}
                </div>
                <div className="view-all-cta">
                    <Link to="/services" className="btn-secondary">View All Services</Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;
