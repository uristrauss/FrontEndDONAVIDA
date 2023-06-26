import React, { useEffect, useState } from 'react';
import './Tabla.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Tabla = () => {
  const [beneficiarios, setBeneficiarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/beneficiario/')
      .then((response) => response.json())
      .then((beneficiariojson) => {
        console.log('beneficiario', beneficiariojson);
        setBeneficiarios(beneficiariojson);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="row">
      {!isLoading &&
        beneficiarios.map((beneficiario) => (
          <div key={beneficiario.Id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={beneficiario.Imagen}
                className="card-img-top"
                alt={beneficiario.Nombre}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {beneficiario.Nombre} {beneficiario.Apellido}
                </h5>
                <p className="card-text">
                  <strong>CantDonacionesNecesitadas:</strong>{' '}
                  {beneficiario.CantDonacionesNecesitadas}
                </p>
                <p className="card-text">
                  <strong>Compatibilidad:</strong> {beneficiario.Compatibilidad}
                </p>
                <p className="card-text">
                  <strong>Historia:</strong> {beneficiario.Historia}
                </p>
                <p className="card-text">
                  <strong>NecesitaSangre:</strong> {beneficiario.NecesitaSangre}
                </p>
                <p className="card-text">
                  <strong>Grupo:</strong> {beneficiario.Grupo}
                </p>
                <p className="card-text">
                  <strong>Factor:</strong> {beneficiario.Factor}
                </p>
                <p className="card-text">
                  <strong>fkCentro:</strong> {beneficiario.fkCentro}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Tabla;
