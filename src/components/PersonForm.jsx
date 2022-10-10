import React from 'react'

const PersonForm = ({handleInputNewName,newName,handleInputNewNumber,newNumber,handleClickAddName}) => {
  return (
    <form>
        <div>
          name: <input onChange={handleInputNewName} value={newName} />
        </div>
        <div>
          number: <input onChange={handleInputNewNumber} value={newNumber} />
        </div>
        <div>
          <button onClick={handleClickAddName} type="submit">
            add
          </button>
        </div>
      </form>
  )
}

export default PersonForm