import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const handleInputFilterName = (e) =>{
    setFilterName(e.target.value)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()));

  const handleInputNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleInputNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleClickAddName = (e) => {
    e.preventDefault()
    if (!persons.filter(person => person.name === newName)[0]){
      setPersons(persons.concat({name: newName, number: newNumber}))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with <input onChange={handleInputFilterName} value={filterName}/>
        </div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input onChange={handleInputNewName} value={newName}/>
        </div>
        <div>
          number: <input onChange={handleInputNewNumber} value={newNumber}/>
        </div>
        <div>
          <button onClick={handleClickAddName} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App