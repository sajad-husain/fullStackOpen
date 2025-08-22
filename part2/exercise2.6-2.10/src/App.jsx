import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const formHandler = () => {

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={formHandler}>
        <div>
          name: <input />
        </div>

        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Number</h2>
      <p>debug: {newName}</p>
      <p>Name: {persons.name}</p>
    </div>
  )
}

export default App