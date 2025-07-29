import React, { useState } from 'react';
import './Components.css';

const InvitationCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="invitation-container">
      <button 
        className="elegant-button envelope-button" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✉️ Cerrar Invitación' : '✉️ Ver Invitación'}
      </button>

      <div className={`envelope ${isOpen ? 'open' : ''}`}>
        <div className="envelope-flap"></div>
        <div className="envelope-body">
          <div className="letter">
            <h2>Te invitamos...</h2>
            <div className="letter-content">
              <p><strong>Fecha:</strong> 28 de Septiembre </p>
              <p><strong>Lugar:</strong> Jano's Palermo Soho</p>
              <p><strong>Hora:</strong> 13:00 hs</p>
              <p><strong>Código de Vestimenta:</strong>  Elegante</p>
              <div className="signature">~ C&L ~</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;