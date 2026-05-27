import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import BoardMembers from '../components/BoardMembers';
import heroBg from '../assets/img_ext-001.png';
import './BoardPage.css';

const BoardPage = () => {
    const { language } = useLanguage();
    const content = {
        en: {
            heroTitle: "Leadership & Governance",
            heroSub: "Guided by a diverse team of experts committed to corporate integrity and visionary growth.",
            philosophyTitle: "Our Leadership Philosophy",
            philosophyText: "At Mosaic Trading Share Company, leadership is about more than management—it's about inspiration and unity. Our board members bring decades of collective wisdom from medicine, law, engineering, and finance to steer our conglomerate towards sustainable excellence."
        },
        am: {
            heroTitle: "አመራር እና አስተዳደር",
            heroSub: "ለኩባንያ ታማኝነት እና ራዕይ ያለው እድገት ቁርጠኛ የሆኑ የተለያዩ ባለሙያዎች ቡድን።",
            philosophyTitle: "የአመራር ፍልስፍናችን",
            philosophyText: "በሞዛይክ ትሬዲንግ አክሲዮን ማህበር አመራር ከአስተዳደር በላይ ነው—ስለ መነሳሳት እና አንድነት ነው። የቦርድ አባሎቻችን ከህክምና፣ ከህግ፣ ከምህንድስና እና ከፋይናንስ ዘርፍ ያካበቱትን ልምድ በማቀናጀት ኩባንያችንን ወደ ዘላቂ ልህቀት ይመራሉ።"
        }
    };
    const c = content[language];

    return (
        <div className="board-page">
            <div className="hero-header" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-header-overlay"></div>
                <div className="container hero-header-content">
                    <h1>{c.heroTitle}</h1>
                    <p>{c.heroSub}</p>
                </div>
            </div>

            <BoardMembers />

            <section className="leadership-message">
                <div className="container">
                    <div className="message-card">
                        <h2>{c.philosophyTitle}</h2>
                        <p>{c.philosophyText}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BoardPage;
