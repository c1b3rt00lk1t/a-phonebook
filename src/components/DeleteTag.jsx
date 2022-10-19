import React from 'react'

const DeleteTag = ({id, name, deletePerson}) => {

  const handleClick = () => {
    if (window.confirm(`Delete ${name} `)){
      deletePerson(id);
    }
  }

  return (
    <span onClick={handleClick} style={{border:"solid", borderRadius:"5px", borderWidth:"1px", padding:"0px 2px", fontSize:"10px", cursor:"pointer"}}> delete</span>
  )
}

export default DeleteTag