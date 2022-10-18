import React from 'react'
import DeleteTag from './DeleteTag'

const Persons = ({filteredPersons}) => {
  return (
    <ul>
        {filteredPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number} <DeleteTag />
          </li>
        ))}
      </ul>
  )
}

export default Persons