import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { getAllAxios, createAxios } from "./services/personsServer";


const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const handleInputFilterName = (e) => {
    setFilterName(e.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  const handleInputNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleInputNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleClickAddName = (e) => {
    e.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    if (newPerson.name === ""){
      alert('The name field is empty...');

    } else if (!persons.filter((person) => person.name === newName)[0]) {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");

      createAxios(newPerson);
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const getPersonsFromServer = () => {
    getAllAxios().then(response => setPersons(response));
   };

  useEffect(getPersonsFromServer, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleInputFilterName={handleInputFilterName}
        filterName={filterName}
      />

      <h2>add a new</h2>
      <PersonForm
        handleInputNewName={handleInputNewName}
        newName={newName}
        handleInputNewNumber={handleInputNewNumber}
        newNumber={newNumber}
        handleClickAddName={handleClickAddName}
      />

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
