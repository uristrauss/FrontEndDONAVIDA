import React from 'react';
import { useEffect, useState } from "react";

const Tabla = () => {
    const [beneficiario, setBeneficiario] =  useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/beneficiario/")
          .then((response) => response.json())
          .then((beneficiariojson) => {
            console.log("beneficiario",beneficiariojson)
            setBeneficiario(beneficiariojson)
            setIsLoading(false)
          });
      }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>TipoSangre</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>CantDonacionesNecesitadas</th>
          <th>Compatibilidad</th>
          <th>Historia</th>
          <th>NecesitaSangre</th>
        </tr>
      </thead>
      <tbody>

        {!isLoading &&

          beneficiario.map((beneficiario) => (
            <tr key = {beneficiario.Id}>
            <td>{beneficiario.TipoSangre}</td>
            <td>{beneficiario.Nombre}</td>
            <td>{beneficiario.Apellido}</td>
            <td>{beneficiario.CantDonacionesNecesitadas}</td>
            <td>{beneficiario.Compatibilidad}</td>
            <td>{beneficiario.Historia}</td>
            <td>{beneficiario.NecesitaSangre}</td>
            <td>dou</td>

          </tr>
          ))
        }

      </tbody>
    </table>

  );

};

 

export default Tabla;