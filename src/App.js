import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleInputNewName = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
  }

  const handleClickAddName = (e) => {
    e.preventDefault()
    if (!persons.filter(person => person.name === newName)[0]){
      setPersons(persons.concat({name: newName}))
      setNewName('')
    }
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleInputNewName} value={newName}/>
        </div>
        <div>
          <button onClick={handleClickAddName} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App