import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import conglomerateHero from '../assets/conglomerate_hero.png';
import './Hero.css';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="hero-bg">
            <div className="hero-overlay-img" style={{ backgroundImage: `url(${conglomerateHero})` }}></div>
            <div className="hero-dark-overlay"></div>
            <div className="container hero-container-centered">
                <div className="hero-content-wide">
                    <h1 className="hero-main-title animate-in">
                        {t('hero.title_1')} <span className="text-blue">{t('hero.title_blue')}</span> <br />
                        {t('hero.title_and')} <span className="text-yellow">{t('hero.title_yellow')}</span>
                    </h1>
                    <p className="hero-tagline animate-in-delay">
                        {t('hero.subtitle')}
                    </p>
                    <div className="hero-btns animate-in-delay-2">
                        <Link to="/services" className="btn-primary">{t('hero.cta_sectors')}</Link>
                        <Link to="/about" className="btn-secondary">{t('hero.cta_story')}</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
