import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ text }) => {
    return (
        <div className="service-card simple">
            <div className="service-check">✓</div>
            <p className="service-card-text">{text}</p>
        </div>
    );
};

export default ServiceCard;
