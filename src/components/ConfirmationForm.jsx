import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ConfirmationForm.css'; // Asegúrate de que este archivo CSS existe

// Inicializa EmailJS con tu Public Key
emailjs.init('lX-5CxoU9V9N2BgHg');

const ConfirmationForm = ({ onClose }) => {
  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    restricciones: '',
    confirmacion: 'si'
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await emailjs.send(
        'service_s8ztldn', // Tu Service ID
        'template_mpksejt', // Tu Template ID
        formData
      );
      
      alert('🎉 ¡Confirmación enviada con éxito!');
      onClose();
    } catch (err) {
      console.error('Error al enviar:', err);
      setError('Error al enviar. Por favor, inténtalo nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-overlay">
      <div className="elegant-form">
        <button 
          className="close-button" 
          onClick={onClose}
          aria-label="Cerrar formulario"
        >
          &times;
        </button>

        <h2>Confirmar Asistencia</h2>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre*</label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              minLength="2"
              placeholder="Ej: María"
            />
          </div>

          <div className="form-group">
            <label htmlFor="apellido">Apellido*</label>
            <input
              id="apellido"
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
              placeholder="Ej: González"
            />
          </div>

          <div className="form-group">
            <label htmlFor="restricciones">Restricciones alimentarias</label>
            <textarea
              id="restricciones"
              name="restricciones"
              value={formData.restricciones}
              onChange={handleChange}
              rows="3"
              placeholder="Ej: Vegetariana, alergia a nueces..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmacion">¿Asistirás?*</label>
            <select
              id="confirmacion"
              name="confirmacion"
              value={formData.confirmacion}
              onChange={handleChange}
              required
            >
              <option value="si">¡Sí, estaré allí!</option>
              <option value="no">No podré asistir</option>
            </select>
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? 'Enviando...' : 'Confirmar Asistencia'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmationForm;