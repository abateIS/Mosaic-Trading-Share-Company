import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/logo_original.png';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <div className="logo-container">
                        <img src={logoImg} alt="Mosaic Trading Logo" className="logo-img" />
                        <span className="company-name">Mosaic Trading <br /><span>Share Company</span></span>
                    </div>
                    <p className="footer-description">{t('footer.description')}</p>
                </div>

                <div className="footer-quick-links">
                    <h4>Quick Links</h4>
                    <Link to="/">{t('nav.home')}</Link>
                    <Link to="/about">{t('nav.about')}</Link>
                    <Link to="/services">{t('nav.services')}</Link>
                    <Link to="/contact">{t('nav.contact')}</Link>
                </div>

                <div className="footer-contact">
                    <h4>{t('nav.contact')}</h4>
                    <p>Email: mosaictradingsharecompany1@gmail.com</p>
                    <p>Tel: +251 92 566 4477</p>
                    <p>Telegram: @mfghospital</p>
                    <p>TIN: 0093159931</p>
                    <p>Bole sub-city, Woreda 07, Addis Ababa</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Mosaic Trading Share Company. {t('footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;
