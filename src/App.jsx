import React, { useState } from 'react';
import AnimalList from './components/AnimalList';
import AddAnimalForm from './components/AddAnimalForm';
import animalsData from './data';
 
function App() {
  const [animals, setAnimals] = useState(animalsData);
 
  const addAnimal = (animal) => {
    setAnimals([...animals, { ...animal, status: 'pendente' }]);
  };
 
  const deleteAnimal = (index) => {
    const updatedAnimals = [...animals];
    updatedAnimals.splice(index, 1);
    setAnimals(updatedAnimals);
  };
 
  const toggleStatus = (index) => {
    const updatedAnimals = [...animals];
    updatedAnimals[index].status =
      updatedAnimals[index].status === 'pendente' ? 'concluído' : 'pendente';
    setAnimals(updatedAnimals);
  };
 
  return (
    <div>
      <h1>Tela de Cadastro de Animais Perdidos</h1>
      <AddAnimalForm addAnimal={addAnimal} />
      <br /> <br />
     
      <AnimalList
        animals={animals}
        onDelete={deleteAnimal}
        onToggleStatus={toggleStatus}
      />
    </div>
  );
}
 
export default App;
 