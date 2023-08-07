import React, { useState } from 'react';
import axios from 'axios';



const RegistroUsuario = () => {
    const [formValues, setFormValues] = useState({
      Nombre: '',
      Apellido: '',
      fechaDeNacimiento: '',
      dni: '',
      email: '',
      contraseña: '',
      peso: '',
      buenaSalud: '',
      embarazo: '',
      sexo: '',
      fechaDeDonacion: '',
      medicamentos: '',
      hepatitisBC: '',
      parto: '',
      operacion: '',
      antitetanica: '',
      ultimoTatuaje: '',
      ultimoHierro: '',
      lactanciaMaterna: '',
      finMononucleosis: '',
      antipaludicos: '',
      its: '',
      tipoSangre: '',
    });
  

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/donante', formValues) 
      .then((response) => {
        console.log('Beneficiario created:', response.data);
        // Reset form values
        setFormValues({
            Nombre: '',
            Apellido: '',
            fechaDeNacimiento: '',
            dni: '',
            email: '',
            contraseña: '',
            peso: '',
            buenaSalud: '',
            embarazo: '',
            sexo: '',
            fechaDeDonacion: '',
            medicamentos: '',
            hepatitisBC: '',
            parto: '',
            operacion: '',
            antitetanica: '',
            ultimoTatuaje: '',
            ultimoHierro: '',
            lactanciaMaterna: '',
            finMononucleosis: '',
            antipaludicos: '',
            its: '',
            tipoSangre: ''
        });
      })
      .catch((error) => {
        console.error('Error creating beneficiario:', error);
        // Handle error case
      });
  };
  

  return (
    <div className="registro-beneficiario">
      <h2>Crear Usuario</h2>
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
          <label htmlFor="fechaDeNacimiento">FechaDeNacimiento:</label>
          <input
            type="date"
            id="fechaDeNacimiento"
            name="FechaDeNacimiento"
            value={formValues.FechaDeNacimiento}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="form-group">
  <label htmlFor="dni">DNI:</label>
  <input
    type="number" // Change type to "number"
    id="dni"
    name="DNI"
    value={formValues.DNI}
    onChange={handleInputChange}
    required
  />
</div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="Email"
            value={formValues.Email}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="text"
            id="contraseña"
            name="Contraseña"
            value={formValues.Contraseña}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="peso">Peso:</label>
          <input
            type="int"
            id="peso"
            name="Peso"
            value={formValues.Peso}
            onChange={handleInputChange}
            required
          />
        </div>

        
        <div className="form-group">
          <label htmlFor="buenaSalud">BuenaSalud:</label>
          <input
            type="bit"
            id="buenaSalud"
            name="BuenaSalud"
            value={formValues.BuenaSalud}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="embarazo">Embarazo:</label>
          <input
            type="bit"
            id="embarazo"
            name="Embarazo"
            value={formValues.Embarazo}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="sexo">Sexo:</label>
          <input
            type="text"
            id="sexo"
            name="Sexo"
            value={formValues.Sexo}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="fechaDeDonacion">FechaDeDonacion:</label>
          <input
            type="date"
            id="fechaDeDonacion"
            name="FechaDeDonacion"
            value={formValues.FechaDeDonacion}
            onChange={handleInputChange}
            required
          />
        </div>


        
        <div className="form-group">
          <label htmlFor="medicamentos">Medicamentos:</label>
          <input
            type="bit"
            id="medicamentos"
            name="Medicamentos"
            value={formValues.Medicamentos}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="hepatitisBC">HepatitisBC:</label>
          <input
            type="bit"
            id="hepatitisBC"
            name="HepatitisBC"
            value={formValues.HepatitisBC}
            onChange={handleInputChange}
            required
          />
        </div>



        <div className="form-group">
          <label htmlFor="parto">Parto:</label>
          <input
            type="date"
            id="parto"
            name="Parto"
            value={formValues.Parto}
            onChange={handleInputChange}
            required
          />
        </div>



        <div className="form-group">
          <label htmlFor="operacion">Operacion:</label>
          <input
            type="date"
            id="operacion"
            name="Operacion"
            value={formValues.Operacion}
            onChange={handleInputChange}
            required
          />
        </div>



        <div className="form-group">
          <label htmlFor="antitetanica">Antitetanica:</label>
          <input
            type="date"
            id="antitetanica"
            name="Antitetanica"
            value={formValues.Antitetanica}
            onChange={handleInputChange}
            required
          />
        </div>



        <div className="form-group">
          <label htmlFor="ultimoTatuaje">UltimoTatuaje:</label>
          <input
            type="date"
            id="ultimoTatuaje"
            name="UltimoTatuaje"
            value={formValues.UltimoTatuaje}
            onChange={handleInputChange}
            required
          />
        </div>



        <div className="form-group">
          <label htmlFor="ultimoHierro">UltimoHierro:</label>
          <input
            type="date"
            id="ultimoHierro"
            name="UltimoHierro"
            value={formValues.UltimoHierro}
            onChange={handleInputChange}
            required
          />
        </div>

        

        <div className="form-group">
          <label htmlFor="lactanciaMaterna">LactanciaMaterna:</label>
          <input
            type="bit"
            id="lactanciaMaterna"
            name="LactanciaMaterna"
            value={formValues.LactanciaMaterna}
            onChange={handleInputChange}
            required
          />
        </div>


        

        <div className="form-group">
          <label htmlFor="finMononucleosis">FinMononucleosis:</label>
          <input
            type="date"
            id="finMononucleosis"
            name="FinMononucleosis"
            value={formValues.FinMononucleosis}
            onChange={handleInputChange}
            required
          />
        </div>



        <div className="form-group">
          <label htmlFor="antipaludicos">Antipaludicos:</label>
          <input
            type="date"
            id="antipaludicos"
            name="Antipaludicos"
            value={formValues.Antipaludicos}
            onChange={handleInputChange}
            required
          />
        </div>



        <div className="form-group">
          <label htmlFor="its">ITS:</label>
          <input
            type="bit"
            id="its"
            name="ITS"
            value={formValues.ITS}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="tipoSangre">TipoSangre:</label>
          <input
            type="text"
            id="tipoSangre"
            name="TipoSangre"
            value={formValues.TipoSangre}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default RegistroUsuario;

