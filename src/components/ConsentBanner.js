import React, { useState, useEffect } from 'react';
import '../styles/ConsentBanner.css'; // Подключим стили

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверка на наличие информации о согласии пользователя в localStorage
    const consentGiven = localStorage.getItem('userConsent');
    if (!consentGiven) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = () => {
    // Сохраняем информацию о согласии пользователя в localStorage
    localStorage.setItem('userConsent', 'true');
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="consent-banner">
        <div className="consent-content">
          <p>
            Мы используем cookies для улучшения работы сайта и сбора статистики. <br />
            Также при использовании сайта вы соглашаетесь на обработку персональных данных.
          </p>
          <p className="discount-info">
            Студенты и сотрудники РКСИ получают скидку 90%! 🎓
          </p>
          <button onClick={handleConsent}>Согласен</button>
        </div>
      </div>
    )
  );
};

export default ConsentBanner;
