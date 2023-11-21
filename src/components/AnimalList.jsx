 
import React, { useState } from 'react';
import '../app.css';
 
function AnimalList({ animals, onDelete, onToggleStatus }) {
  const [searchTerm, setSearchTerm] = useState('');
 
  const handleDelete = (index) => {
    onDelete(index);
  };
 
  const handleToggleStatus = (index) => {
    onToggleStatus(index);
  };
 
  const filteredAnimals = animals.filter((animal) =>
    animal.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
    <div className="container">
      <h2>Lista de Animais</h2>
      <input
        type="text"
        placeholder="Pesquisar animais"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredAnimals.map((animal, index) => (
          <li key={index} className={animal.status}>
            <div>
              <img src={animal.imagemUrl} alt={`Imagem de ${animal.nome}`} />
              <span>
                Nome: {animal.nome}, Raça: {animal.raca}, Local: {animal.local}
              </span>
              <div>
                <button
                  onClick={() => handleToggleStatus(index)}
                  disabled={animal.status === 'concluído'}
                >
                  {animal.status === 'pendente' ? 'Pendente' : 'Concluir'}
                </button>
                {/* Adicione uma margem à direita para criar espaço */}
                <button
                  onClick={() => handleDelete(index)}
                  style={{ marginLeft: '8px' }}
                >
                  Excluir
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default AnimalList;