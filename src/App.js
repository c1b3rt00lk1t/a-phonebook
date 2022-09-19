import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
        {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App