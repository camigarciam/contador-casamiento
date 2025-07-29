import React, { useState } from 'react';
import './Components.css'; // Asegúrate de tener un archivo CSS para estilos

const ConfirmationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 1,
    attendance: 'yes'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias, ${formData.name}! Tu asistencia ha sido confirmada.`);
    onClose();
  };

  return (
    <div className="form-overlay">
      <div className="elegant-form">
        <h2>Confirmar Asistencia</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre Completo:
            <input 
              type="text" 
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
              required 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              value={formData.email} 
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
              required 
            />
          </label>
          <label>
            Número de Invitados:
            <input 
              type="number" 
              min="1" 
              value={formData.guests} 
              onChange={(e) => setFormData({...formData, guests: e.target.value})} 
            />
          </label>
          <label>
            ¿Asistirás?
            <select 
              value={formData.attendance} 
              onChange={(e) => setFormData({...formData, attendance: e.target.value})}
            >
              <option value="yes">Sí, con gusto</option>
              <option value="no">No, lo siento</option>
            </select>
          </label>
          <div className="form-buttons">
            <button type="submit" className="elegant-button">Confirmar</button>
            <button type="button" onClick={onClose} className="elegant-button cancel">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmationForm;