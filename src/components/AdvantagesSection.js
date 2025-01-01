import React from 'react';
import '../styles/AdvantagesSection.css';
import oceanWaveGif from '../images/ocean-wave-7-colorful-blue-waves-acegif.gif';  // Импорт GIF

const AdvantagesSection = () => {
    const advantages = [
        {
            id: 1,
            icon: 'fa-hotel',  // Иконка от FontAwesome
            title: 'Комфортные каюты',
            description: 'С видом на океан и все удобства для вашего отдыха.',
        },
        {
            id: 2,
            icon: 'fa-utensils',  // Иконка от FontAwesome
            title: 'Все включено',
            description: 'Гастрономические ужины, напитки и развлекательные программы.',
        },
        {
            id: 3,
            icon: 'fa-map-marked-alt',  // Иконка от FontAwesome
            title: 'Ежедневные экскурсии',
            description: 'Каждый день новые порты и новые впечатления.',
        },
        {
            id: 4,
            icon: 'fa-spa',  // Иконка от FontAwesome
            title: 'Доступ к спа',
            description: 'Расслабляющие процедуры и уютные спа-зоны для отдыха.',
        },
    ];

    // Стиль для фона с анимацией волн
    const sectionStyle = {
        background: `url(${oceanWaveGif}) repeat-x`,
        backgroundSize: 'auto 100%', // Фон растягивается по высоте секции
        animation: 'wave-animation 10s linear infinite',
        position: 'relative',
        height: '100vh', // Высота секции на весь экран
    };

    return (
        <div className="advantages" id="advantages" style={sectionStyle}>
            <h2>Преимущества наших круизов</h2>
            <div className="advantages-list">
                {advantages.map((advantage) => (
                    <div className="advantage-card" key={advantage.id}>
                        <div className="advantage-icon">
                            <i className={`fas ${advantage.icon}`}></i>
                        </div>
                        <h3>{advantage.title}</h3>
                        <p>{advantage.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdvantagesSection;
