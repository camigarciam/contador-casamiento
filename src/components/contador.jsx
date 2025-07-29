import React, { useState, useEffect } from 'react';
import './Components.css'; // Asegúrate de tener un archivo CSS para estilos
import InvitationCard from './InvitationCard';


const Contador = () => {
  // Fecha del casamiento (ejemplo: 25 de diciembre de 2024)
  const weddingDate = new Date('2025-09-28T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <div className="countdown-container">
      <h1 className="countdown-title">Caro & Lelio 💐</h1>
      <div className="countdown-grid">
        <div className="countdown-card">
          <div className="countdown-number">{timeLeft.days}</div>
          <div className="countdown-label">Días</div>
        </div>
        <div className="countdown-card">
          <div className="countdown-number">{timeLeft.hours}</div>
          <div className="countdown-label">Horas</div>
        </div>
        <div className="countdown-card">
          <div className="countdown-number">{timeLeft.minutes}</div>
          <div className="countdown-label">Minutos</div>
        </div>
        <div className="countdown-card">
          <div className="countdown-number">{timeLeft.seconds}</div>
          <div className="countdown-label">Segundos</div>
        </div>
      </div>
      <InvitationCard />
      <div className="ornament"></div> {/* Decoración elegante */}
    </div>
  );
};

export default Contador;