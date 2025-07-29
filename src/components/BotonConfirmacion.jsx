import React, { useState } from 'react';
import ConfirmationForm from './ConfirmationForm';
import './Components.css';

const BotonConfirmacion = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="button-container">
      <button 
        className="elegant-button"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? '✖ Cerrar' : '📝 Confirmar Asistencia'}
      </button>
      {showForm && <ConfirmationForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default BotonConfirmacion;