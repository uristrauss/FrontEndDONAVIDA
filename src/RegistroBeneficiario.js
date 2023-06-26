import React, { useState } from 'react';
import './RegistroBeneficiario.css';
import axios from 'axios';



const RegistroBeneficiario = () => {
  const [formValues, setFormValues] = useState({
    Nombre: '',
    Apellido: '',
    CantDonacionesNecesarias: '',
    Compatibilidad: '',
    Historia: '',
    NecesitaSangre: '',
    Grupo: '',
    Factor: '',
    fkCentro: '',
    Imagen: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/beneficiario', formValues) // Adjust the URL and endpoint based on your backend API
      .then((response) => {
        console.log('Beneficiario created:', response.data);
        // Reset form values
        setFormValues({
          Nombre: '',
          Apellido: '',
          CantDonacionesNecesarias: '',
          Compatibilidad: '',
          Historia: '',
          NecesitaSangre: '',
          Grupo: '',
          Factor: '',
          fkCentro: '',
          Imagen: ''
        });
      })
      .catch((error) => {
        console.error('Error creating beneficiario:', error);
        // Handle error case
      });
  };
  

  return (
    <div className="registro-beneficiario">
      <h2>Crear Beneficiario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="Nombre"
            value={formValues.Nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="Apellido"
            value={formValues.Apellido}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cantDonacionesNecesarias">Cantidad de Donaciones Necesarias:</label>
          <input
            type="text"
            id="cantDonacionesNecesarias"
            name="CantDonacionesNecesarias"
            value={formValues.CantDonacionesNecesarias}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="compatibilidad">Compatibilidad:</label>
          <input
            type="text"
            id="compatibilidad"
            name="Compatibilidad"
            value={formValues.Compatibilidad}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="historia">Historia:</label>
          <textarea
            id="historia"
            name="Historia"
            value={formValues.Historia}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="necesitaSangre">Necesita Sangre:</label>
          <input
            type="text"
            id="necesitaSangre"
            name="NecesitaSangre"
            value={formValues.NecesitaSangre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="grupo">Grupo:</label>
          <input
            type="text"
            id="grupo"
            name="Grupo"
            value={formValues.Grupo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="factor">Factor:</label>
          <input
            type="text"
            id="factor"
            name="Factor"
            value={formValues.Factor}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fkCentro">Centro:</label>
          <input
            type="text"
            id="fkCentro"
            name="fkCentro"
            value={formValues.fkCentro}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imagen">Imagen:</label>
          <input
            type="text"
            id="imagen"
            name="Imagen"
            value={formValues.Imagen}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default RegistroBeneficiario;

