import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { getAllAxios, createAxios,deleteAxios, updateAxios } from "./services/personsServer";
import './index.css';


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
    const alreadyExistsPerson = persons.filter((person) => person.name === newName)[0];

    if (newPerson.name === ""){
      alert('The name field is empty...');

    } else if (!alreadyExistsPerson) {
      setNewName("");
      setNewNumber("");

      createAxios(newPerson).then(response => setPersons(persons.concat(response)));
    } else {
      if(window.confirm(`Update ${newName}`)){
        setNewName("");
        setNewNumber("");
        updateAxios(alreadyExistsPerson.id, newPerson).then(response => setPersons(persons.map( person => person.id === response.id ? {...person, number: response.number} : person)));
      }
    }
  };

  const deletePerson = (id) => {
    deleteAxios(id);
    setPersons(persons.filter( person => person.id !== id));
  }

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
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson}/>
    </div>
  );
};

export default App;
