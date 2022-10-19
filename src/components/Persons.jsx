import React from 'react'
import DeleteTag from './DeleteTag'

const Persons = ({filteredPersons, deletePerson}) => {
  return (
    <ul>
        {filteredPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number} {person.id}<DeleteTag deletePerson={deletePerson} id={person.id} name={person.name}/>
          </li>
        ))}
      </ul>
  )
}

export default Persons