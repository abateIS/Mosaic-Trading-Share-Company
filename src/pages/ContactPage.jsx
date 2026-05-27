import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import heroBg from '../assets/universal_hero.png';
import './ContactPage.css';

const ContactPage = () => {
    const { t } = useLanguage();

    return (
        <div className="contact-page">
            <div className="hero-header" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-header-overlay"></div>
                <div className="container hero-header-content">
                    <h1>{t('contact.title')}</h1>
                    <p>{t('contact.subtitle')}</p>
                </div>
            </div>

            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info-section">
                            <h2>{t('contact.title')}</h2>
                            <div className="contact-details">
                                <div className="info-item">
                                    <div className="info-icon">📍</div>
                                    <div className="info-text">
                                        <h3>{t('contact.info_office')}</h3>
                                        <p>Sheger City, Furi sub-city, Muda Furi</p>
                                        <p>Oromia, Ethiopia</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">📞</div>
                                    <div className="info-text">
                                        <h3>{t('contact.info_phone')}</h3>
                                        <p>+251 92 566 4477</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">✈️</div>
                                    <div className="info-text">
                                        <h3>Telegram</h3>
                                        <p>@mfghospital</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">✉️</div>
                                    <div className="info-text">
                                        <h3>{t('contact.info_email')}</h3>
                                        <p>mosaictradingsharecompany1@gmail.com</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">📑</div>
                                    <div className="info-text">
                                        <h3>{t('contact.info_tin')}</h3>
                                        <p>TIN: 0093159931</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-section">
                            <div className="form-card">
                                <h2>{t('contact.form_title')}</h2>
                                <form>
                                    <div className="form-group">
                                        <label>{t('contact.form_name')}</label>
                                        <input type="text" placeholder={t('contact.form_name')} required />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('contact.form_email')}</label>
                                        <input type="email" placeholder="email@example.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('contact.form_subject')}</label>
                                        <input type="text" placeholder={t('contact.form_subject')} required />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('contact.form_message')}</label>
                                        <textarea rows="5" placeholder={t('contact.form_message')} required></textarea>
                                    </div>
                                    <button type="submit" className="btn-primary full-width">{t('contact.form_submit')}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <div className="container">
                    <div className="map-placeholder">
                        <p>Map Location: Sheger City, Furi sub-city, Muda Furi, Oromia</p>
                        <span>(Integration for Google Maps would go here)</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
