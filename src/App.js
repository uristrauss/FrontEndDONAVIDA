import React from 'react';
import './App.css';
import RegistroBeneficiario from './RegistroBeneficiario';
import Tabla from './Tabla';
import Login from './Login';
import RegistroUsuario from './RegistroUsuario';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>BENEFICIARIOS</h1>
        <RegistroUsuario/>
      </div>
    </div>
  );
}

export default App;
