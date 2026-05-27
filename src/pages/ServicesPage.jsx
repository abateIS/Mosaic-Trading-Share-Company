import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './ServicesPage.css';
import ServiceCard from '../components/ServiceCard';

import medicalImg from '../assets/medical_sector_premium.png';
import industrialImg from '../assets/industrial_trading_premium.png';
import agriImg from '../assets/agriculture_marketing_premium.png';
import constructionImg from '../assets/construction_consultancy_premium.png';
import tradeImg from '../assets/import_export_trade_premium.png';

const servicesData = {
    en: [
        {
            category: "Medical Sector",
            image: medicalImg,
            items: [
                "First level specialized hospital medical service centers and clinics.",
                "Diagnostic centers providing specialized laboratory and radiology services.",
                "Care centers for chronic illness, aging, or disability health problems.",
                "Professional ambulance service operations.",
                "Consultancy and networking for hospital establishment and medical institutions."
            ],
            isFuture: false
        },
        {
            category: "Manufacturing & Industry",
            image: industrialImg,
            items: [
                "Manufacturing of human and animal medicines and pharmaceuticals.",
                "Production of specialized medical service equipment.",
                "Manufacturing of hygiene, sanitation products, paper, and chemicals.",
                "Establishment of medical industrial factories and electronics manufacturing.",
                "Producing and bottling high-quality mineral water."
            ],
            isFuture: true
        },
        {
            category: "Import & Export Trade",
            image: tradeImg,
            items: [
                "Importing diagnostic equipment and related hospital supplies.",
                "Wholesale and retail of medical laboratory chemicals and pharmaceuticals.",
                "Importing human and animal medicines for national distribution.",
                "Importing and distributing electronics and industrial inputs.",
                "Establishing strategic business associations and share trading."
            ],
            isFuture: true
        },
        {
            category: "Agriculture & Hospitality",
            image: agriImg,
            items: [
                "Modern livestock and poultry farming and marketing operations.",
                "Strategic marketing of high-value agricultural products.",
                "Establishment and management of professional hotels.",
                "Guest houses and bed & breakfast services for diverse clientele."
            ],
            isFuture: true
        },
        {
            category: "Construction & Consultancy",
            image: constructionImg,
            items: [
                "Professional architectural and civil engineering consultancy services.",
                "Environmental consultancy and sustainability work.",
                "Strategic research, policy preparation, and vocational training.",
                "Engaging in specialized construction and finishing trade work."
            ],
            isFuture: true
        }
    ],
    am: [
        {
            category: "ሆስፒታል, የሕክምና አገልግሎት መስጫ ማዕከላት እና ክሊኒኮች",
            image: medicalImg,
            items: [
                "የመጀመሪያ ደረጃ ልዩ ሆስፒታል የህክምና አገልግሎት ማዕከላት እና ክሊኒኮች።",
                "ልዩ የላቦራቶሪ እና የሬዲዮሎጂ አገልግሎት የሚሰጡ ምርመራ ማዕከላት።",
                "ለሥር የሰደድ በሽታ፣ ለእርጅና ወይም ለአካል ጉዳት ችግሮች እንክብካቤ ማዕከላት።",
                "ሙያዊ የአምቡላንስ አገልግሎት።",
                "ለሆስፒታል ማቋቋም እና ለህክምና ተቋማት ምክር እና ትስስር።"
            ],
            isFuture: false
        },
        {
            category: "ማኑፋክቸሪንግ እና ኢንዱስትሪ",
            image: industrialImg,
            items: [
                "የሰው እና የእንስሳት መድሃኒቶች እና ፋርማሲዩቲካልስ ምርት።",
                "ልዩ የህክምና አገልግሎት መሳሪያዎች ምርት።",
                "የንጽህና፣ ሳኒቴሽን ምርቶች፣ ወረቀት እና ኬሚካሎች ማምረት።",
                "የህክምና ኢንዱስትሪ ፋብሪካዎች እና ኤሌክልትሮኒክስ ማምረቻ ማቋቋም።",
                "ከፍተኛ ጥራት ያለው ማዕድን ውሃ ማምረት እና መሸጎጥ።"
            ],
            isFuture: true
        },
        {
            category: "ገቢ እና ወጪ ንግድ",
            image: tradeImg,
            items: [
                "የምርመራ መሣሪያዎችን እና ተዛማጅ የሆስፒታል አቅርቦቶችን ማስመጣት።",
                "የህክምና ላቦራቶሪ ኬሚካሎች እና ፋርማሲዩቲካልስ ጅምላ እና ችርቻሮ።",
                "ለሀገር አቀፍ ስርጭት የሰው እና የእንስሳት መድሃኒቶች ማስመጣት።",
                "ኤሌክትሮኒክስ እና የኢንዱስትሪ ግብዓቶች ማስመጣት እና ማከፋፈል።",
                "ስትራቴጂካዊ የንግድ ማህበራት እና የአክሲዮን ንግድ ማቋቋም።"
            ],
            isFuture: true
        },
        {
            category: "ግብርና እና ሆስፒታሊቲ",
            image: agriImg,
            items: [
                "ዘመናዊ የእንስሳት እና የዶሮ እርባታ እና ግይት ስራዎች።",
                "ከፍተኛ ዋጋ ያላቸውን የግብርና ምርቶች ስትራቴጂካዊ ግብይት።",
                "ሙያዊ ሆቴሎች ማቋቋም እና ማስተዳደር።",
                "ለተለያዩ ደንበኞች የእንግዳ ማረፊያ እና ቢ ኤንድ ቢ አገልግሎቶች።"
            ],
            isFuture: true
        },
        {
            category: "ግንባታ እና ማማከር",
            image: constructionImg,
            items: [
                "ሙያዊ የአርክቴክቸር እና የሲቪል ምህንድስና ማማከር አገልግሎቶች።",
                "የአካባቢ ማማከር እና ዘላቂነት ስራ።",
                "ስትራቴጂካዊ ምርምር፣ ፖሊሲ ዝግጅት እና ሙያ ማሰልጠን።",
                "ልዩ ግንባታ እና ማጠናቀቂያ ንግድ ስራ መሰማራት።"
            ],
            isFuture: true
        }
    ]
};

const ServicesPage = () => {
    const { language, t } = useLanguage();
    const sectors = servicesData[language];

    return (
        <div className="services-page">
            <section className="services-hero-bg">
                <div className="hero-dark-overlay"></div>
                <div className="container relative-content">
                    <h1>{t('services.hero_title')}</h1>
                    <p>{t('services.hero_subtitle')}</p>
                </div>
            </section>

            <section className="services-content">
                <div className="container">
                    {sectors.map((sector, index) => (
                        <div key={index} className={`sector-section ${index % 2 === 1 ? 'reverse' : ''} ${sector.isFuture ? 'future-sector' : 'active-sector'}`}>
                            {sector.image && (
                                <div className="sector-image-container">
                                    <img src={sector.image} alt={sector.category} className="sector-image-large" />
                                    {sector.isFuture && (
                                        <div className="future-badge">
                                            <strong>{t('services.future_label')}</strong>
                                        </div>
                                    )}
                                </div>
                            )}
                            <div className="sector-info-container">
                                <h2 className="sector-title">
                                    {sector.category}
                                    {sector.isFuture && <span className="future-text-inline"> - {t('services.future_label')}</span>}
                                </h2>
                                <div className="services-grid">
                                    {sector.items.map((text, i) => (
                                        <ServiceCard key={i} text={text} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="sector-cta-bg">
                <div className="cta-overlay"></div>
                <div className="container relative-content">
                    <div className="cta-card-glass">
                        <h2>{t('services.cta_title')}</h2>
                        <p>{t('services.cta_subtitle')}</p>
                        <button className="btn-secondary">{t('services.cta_btn')}</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
