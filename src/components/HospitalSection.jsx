import React from 'react';
import { Link } from 'react-router-dom';
import hospitalImg from '../assets/img_ext-000.png';
import './HospitalSection.css';

const HospitalSection = () => {
    return (
        <section id="subsidiaries" className="hospital-section">
            <div className="container">
                <div className="hospital-card">
                    <div className="hospital-img-container">
                        <img src={hospitalImg} alt="Mosaic-Furi General Hospital Internal" className="hospital-img" />
                        <div className="img-overlay"></div>
                        <div className="img-badge">Opening Soon</div>
                    </div>
                    <div className="hospital-content">
                        <div className="coming-soon-label">Coming Soon to Addis Ababa</div>
                        <h2 className="section-title">Mosaic-Furi General Hospital</h2>
                        <div className="underline"></div>
                        <p>
                            Our flagship healthcare facility is nearing completion. Mosaic-Furi General Hospital
                            will set a new standard for medical excellence in Ethiopia, combining cutting-edge
                            technology with compassionate care.
                        </p>
                        <ul className="hospital-features">
                            <li>Primary Level Specialized Services</li>
                            <li>Laboratory & Radiology Centers</li>
                            <li>Advanced Wellness & Relaxation</li>
                            <li>Home-based Medical Care</li>
                        </ul>
                        <div className="hospital-actions">
                            <Link to="/contact" className="btn-primary">Inquire About Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HospitalSection;
