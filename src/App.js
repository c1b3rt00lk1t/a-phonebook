import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

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
    if (!persons.filter((person) => person.name === newName)[0]) {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };


  const getDataFromJSONServer = () => {
  
  };

  useEffect(getDataFromJSONServer,[])




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
