import React, { useState } from 'react';
 
function AddAnimalForm({ addAnimal }) {
  const [animal, setAnimal] = useState({
    nome: '',
    raca: '',
    local: '',
    imagemUrl: '',
  });
 
  const handleSubmit = (event) => {
    event.preventDefault();
    addAnimal(animal);
    setAnimal({
      nome: '',
      raca: '',
      local: '',
      imagemUrl: '',
    });
  };
 
  return (
    <div className="container">
      <h2>Cadastrar Animal</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          value={animal.nome}
          onChange={(e) => setAnimal({ ...animal, nome: e.target.value })}
        />
 
        <label>Raça:</label>
        <input
          type="text"
          value={animal.raca}
          onChange={(e) => setAnimal({ ...animal, raca: e.target.value })}
        />
 
        <label>Local (Encontrado/Perdido):</label>
        <input
          type="text"
          value={animal.local}
          onChange={(e) => setAnimal({ ...animal, local: e.target.value })}
        />
 
        <label>URL da Imagem:</label>
        <input
          type="text"
          value={animal.imagemUrl}
          onChange={(e) => setAnimal({ ...animal, imagemUrl: e.target.value })}
        />
 
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
 
export default AddAnimalForm;