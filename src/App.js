import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import {
  getAllAxios,
  createAxios,
  deleteAxios,
  updateAxios,
} from "./services/personsServer";
import "./index.css";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const [notificationColor, setNotificationColor] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);

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
    const alreadyExistsPerson = persons.filter(
      (person) => person.name === newName
    )[0];

    if (newPerson.name === "") {
      alert("The name field is empty...");
    } else if (!alreadyExistsPerson) {
      setNewName("");
      setNewNumber("");

      createAxios(newPerson)
        .then((response) => {
          setPersons(persons.concat(response));
          setNotificationMessage(`Added ${response.name}`)
          setNotificationColor('green');
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 4000)
        })
    } else {
      if (window.confirm(`Update ${newName}`)) {
        setNewName("");
        setNewNumber("");
        updateAxios(alreadyExistsPerson.id, newPerson).then((response) =>{
          setPersons(
            persons.map((person) =>
              person.id === response.id
                ? { ...person, number: response.number }
                : person
            )
          );
          
          setNotificationMessage(`Modified ${response.name}`)
          setNotificationColor('green');
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 4000)
        }
        ).catch(error => {
          alert(
            `the person '${alreadyExistsPerson.name}' was already deleted from server`
          )
          setPersons(persons.filter(person => person.id !== alreadyExistsPerson.id))
        });
      }
    }
  };

  const deletePerson = (id) => {
    deleteAxios(id);
    setPersons(persons.filter((person) => person.id !== id));
  };

  const getPersonsFromServer = () => {
    getAllAxios().then((response) => setPersons(response));
  };

  useEffect(getPersonsFromServer, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        message={notificationMessage}
        color={notificationColor}
        display={showNotification}
      />
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
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
