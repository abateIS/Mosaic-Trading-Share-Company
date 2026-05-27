import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import About from '../components/About';
import heroBg from '../assets/universal_hero.png';
import './AboutPage.css';

const AboutPage = () => {
    const { language } = useLanguage();
    const content = {
        en: {
            heroTitle: "About Mosaic Trading",
            heroSub: "Building a legacy of excellence, unity, and professional care across Ethiopia.",
            vision: "Our Vision",
            visionText: "To be the leading conglomerate in East Africa, recognized for driving innovation, sustainable development, and superior quality across healthcare, trade, and manufacturing sectors.",
            mission: "Our Mission",
            missionText: "To deliver exceptional value to our shareholders and communities by leveraging diverse expertise, state-of-the-art technology, and a commitment to professional integrity and excellence.",
            capitalTitle: "Capital & Growth",
            capitalText: "Mosaic Trading Share Company is backed by a robust and transparent capital structure, ensuring long-term stability and the capability to execute large-scale industrial and healthcare projects."
        },
        am: {
            heroTitle: "ስለ ሞዛይክ ትሬዲንግ",
            heroSub: "በኢትዮጵያ ውስጥ የላቀ ደረጃ፣ አንድነት እና ሙያዊ እንክብካቤ ውርስ መገንባት።",
            vision: "ራዕያችን",
            visionText: "በጤና አጠባበቅ፣ ንግድ እና ማኑፋክቸሪንግ ዘርፎች ፈጠራን፣ ዘላቂ ልማትን እና ከፍተኛ ጥራትን በማምጣት ግንዛቤ ያለው በምስራቅ አፍሪካ ቀዳሚ ኩባንያዎች ስብስብ መሆን።",
            mission: "ተልዕኮአችን",
            missionText: "የተለያዩ ባለሙያዎችን፣ ዘመናዊ ቴክኖሎጂን እና ለሙያዊ ታማኝነት እና ለላቀ ደረጃ ቁርጠኝነትን በመጠቀም ለባለአክሲዮኖቻችን እና ለማህበረሰቦች ልዩ ዋጋ ማቅረብ።",
            capitalTitle: "ካፒታል እና እድገት",
            capitalText: "ሞዛይክ ትሬዲንግ አክሲዮን ማህበር በጠንካራ እና ግልጽ የካፒታል መዋቅር የተደገፈ ሲሆን ረጅም ጊዜ መረጋጋትን እና ትላልቅ የኢንዱስትሪ እና የጤና ፕሮጀክቶችን ለማስፈፀም ያስችላል።"
        }
    };
    const c = content[language];

    return (
        <div className="about-page">
            <div className="hero-header" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-header-overlay"></div>
                <div className="container hero-header-content">
                    <h1>{c.heroTitle}</h1>
                    <p>{c.heroSub}</p>
                </div>
            </div>

            <About />

            <section className="vision-mission">
                <div className="container grid-2">
                    <div className="vision-card card-premium">
                        <h3>{c.vision}</h3>
                        <p>{c.visionText}</p>
                    </div>
                    <div className="mission-card card-premium">
                        <h3>{c.mission}</h3>
                        <p>{c.missionText}</p>
                    </div>
                </div>
            </section>

            <section className="capital-strength">
                <div className="container text-center">
                    <h2>{c.capitalTitle}</h2>
                    <div className="underline"></div>
                    <p className="max-700">{c.capitalText}</p>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
