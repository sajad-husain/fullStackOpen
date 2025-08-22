import React, { useState } from 'react'
import Person from './Person'

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
          name: <input onChange={(event) => setNewName(event.target.value)} value={newName} />
        </div>

        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Number</h2>
      <p>debug: {newName}</p>
      {persons.map(person => <Person key={Math.random() * person.length} name={person.name} />)}
    </div>
  )
}

export default App