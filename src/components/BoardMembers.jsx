import React from 'react';
import './BoardMembers.css';

import tayeZewdieImg from '../assets/taye_zewdie.jpg';

const boardMembers = [
    { name: 'Mr. Taye Zewdie (MSc)', title: 'General Manager, Assistant Professor', initial: 'TZ', image: tayeZewdieImg },
    { name: 'Dr. Mengistu Gudissa (MD)', title: 'Board Chairperson', initial: 'MG' },
    { name: 'Mr. Endalkachew Bogale (MSc)', title: 'Board Secretory', initial: 'EB' },
    { name: 'Dr. Misganaw Tesfa (MD)', title: 'Deputy Chairperson, General Surgeon, Urologist, Assistant professor', initial: 'MT' },
    { name: 'Dr. Senait Gebrewold (MD)', title: 'Obstetrician and Gynecologist', initial: 'SG' },
    { name: 'Dr. Yiheyis Feleke (MD)', title: 'Orthopedic Surgeon', initial: 'YF' },
    { name: 'Dr. Birhanu Ayana (MD)', title: 'Orthopedic Surgeon, Pediatric Orthopedic Surgeon, Associate Professor', initial: 'BA' },
    { name: 'Dr. Tesfaye Lema (MD)', title: 'Orthopedic Surgeon, MPH', initial: 'TL' },
    { name: 'Dr. Daniel Habtemariam (MD)', title: 'Obstetrician and Gynecologist', initial: 'DH' },
    { name: 'Dr. Natenael Asres (MD)', title: 'Board Member', initial: 'NA' },
    { name: 'Mr. Abebayhu Negede (LLB)', title: 'Lawyer', initial: 'AN' },
];

const BoardMembers = () => {
    return (
        <section id="board" className="board-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Board of Directors</h2>
                    <div className="underline"></div>
                    <p className="section-subtitle">
                        Meet the visionary leadership team guiding Mosaic Trading Share Company
                        towards excellence and innovation.
                    </p>
                </div>
                <div className="board-grid">
                    {boardMembers.map((member, index) => (
                        <div key={index} className="member-card" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="member-image-placeholder">
                                {member.image ? (
                                    <img src={member.image} alt={member.name} className="member-image" />
                                ) : (
                                    <span className="member-initials">{member.initial}</span>
                                )}
                                <div className="member-overlay">
                                    {/* Brand overlay text removed as per user request */}
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>{member.name}</h4>
                                <p>{member.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoardMembers;
