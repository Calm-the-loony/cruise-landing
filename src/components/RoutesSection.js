import React from 'react';
import mediterraneanCruise from '../images/mediterranean-cruise.jpg';  // Импорт изображения
import northernFjords from '../images/northern-fjords.jpg';  // Импорт изображения
import tropicalAdventures from '../images/tropical-adventures.jpg';  // Импорт изображения
import '../styles/RoutesSection.css';

const RoutesSection = () => {
    const routes = [
        { 
            id: 1, 
            name: 'Средиземноморский круиз', 
            description: 'Испания, Италия, Греция', 
            duration: '7 дней', 
            price: '50 000 ₽', 
            image: mediterraneanCruise // Использование импортированного изображения
        },
        { 
            id: 2, 
            name: 'Северные фьорды', 
            description: 'Норвегия, Дания, Швеция', 
            duration: '14 дней', 
            price: '80 000 ₽', 
            image: northernFjords // Использование импортированного изображения
        },
        { 
            id: 3, 
            name: 'Тропические приключения', 
            description: 'Карибские острова, Куба, Ямайка', 
            duration: '10 дней', 
            price: '120 000 ₽', 
            image: tropicalAdventures // Использование импортированного изображения
        },
    ];

    return (
        <div className="routes" id="routes">
            <h2>Популярные маршруты</h2>
            <div className="routes-list">
                {routes.map((route) => (
                    <div className="route-card" key={route.id}>
                        <div className="route-image">
                            <img src={route.image} alt={route.name} />
                        </div>
                        <div className="route-content">
                            <h3>{route.name}</h3>
                            <p>{route.description}</p>
                            <p className="duration">{route.duration}</p>
                            <p className="price">{route.price}</p>
                            <button>Подробнее</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoutesSection;
