import React, { useState } from 'react';
import GuerreroForm from '../components/GuerreroForm';
import GuerreroView from '../components/GuerreroView';

function GuerreroContainer() {
  const [guerreros, setGuerreros] = useState([]);

  const handleCreate = (guerrero) => {
    setGuerreros([...guerreros, guerrero]);
  };

  const handleEliminar = (idAEliminar) => {
  setGuerreros(guerreros.filter((g, index) => (g.id ?? index) !== idAEliminar))
}

  return (
    <div className="container mt-4">
      <div className="row justify-content-center mb-4">
        <div className="col-md-6 col-lg-5">
          <GuerreroForm onCreateGuerrero={handleCreate} />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12">
          <GuerreroView guerreros={guerreros} onEliminar={handleEliminar} />
        </div>
      </div>
    </div>
  );
}

export default GuerreroContainer;