import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

import boardImg from '../assets/img_ext-002.png';
import formationImg from '../assets/formation_1.jpg';
import groupImg from '../assets/formation_2.png';

const StatCard = ({ target, label, suffix = "", color = "var(--primary-blue)" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started) {
                setStarted(true);
            }
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        let start = 0;
        const duration = 2000;
        const stepTime = Math.max(Math.floor(duration / target), 20);
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) { setCount(target); clearInterval(timer); }
        }, stepTime);
        return () => clearInterval(timer);
    }, [started, target]);

    return (
        <div className="stat-box" style={{ borderColor: color }} ref={ref}>
            <h3 style={{ color: color }}>{count}{suffix}</h3>
            <p>{label}</p>
        </div>
    );
};

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="section-title">{t('about.title')}</h2>
                        <div className="underline"></div>

                        <div className="about-paragraphs">
                            <p>{t('about.p1')}</p>
                            <p>{t('about.p2')}</p>
                        </div>

                        <div className="stats-container">
                            <StatCard target={2} label={t('about.stat_years')} suffix="+" color="var(--primary-blue)" />
                            <StatCard target={40} label={t('about.stat_staff')} suffix="+" color="#FAD900" />
                            <StatCard target={50} label={t('about.stat_capital')} suffix="M+" color="#A20587" />
                            <StatCard target={1} label={t('about.stat_sectors')} suffix="" color="#99B444" />
                        </div>
                    </div>

                    <div className="formation-gallery">
                        <div className="gallery-main">
                            <img src={boardImg} alt="Company Formation Meeting" className="grayscale-to-color" />
                        </div>
                        <div className="gallery-secondary">
                            <img src={formationImg} alt="Board Members Discussion" className="grayscale-to-color" />
                            <img src={groupImg} alt="Founding Members Group" className="grayscale-to-color" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
