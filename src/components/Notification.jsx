import React from 'react'

const Notification = ({ message, color, display}) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={`notification ${!display ? 'hidden' : ''}`} style={{color:color}}>
        {message}
      </div>
    )
  }

export default Notification