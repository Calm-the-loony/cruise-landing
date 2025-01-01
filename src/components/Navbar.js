import React from 'react';
import { FaShip } from 'react-icons/fa'; // Библиотека React Icons
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <FaShip className="logo-icon" />
                <span>Морские приключения 2025</span>
            </div>
            <ul className="navbar-menu">
                <li><a href="#home">Главная</a></li>
                <li><a href="#routes">Маршруты</a></li>
                <li><a href="#advantages">Преимущества</a></li>
                <li><a href="#booking">Бронирование</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
