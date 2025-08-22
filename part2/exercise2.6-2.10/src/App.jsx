import React, { useState } from 'react'
import Person from './Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', no: '0347-6858-099', id: 1 }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const formHandler = (event) => {
    event.preventDefault()
    const newPerson = [...persons, { name: newName, no: newNumber, id: id++ }]
    setPersons(newPerson)
    setNewName('')
  }





  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={formHandler}>
        <div>
          name: <input onChange={(event) => setNewName(event.target.value)} value={newName} />
          name: <input onChange={(event) => setNewNumber(event.target.value)} value={newNumber} />
        </div>

        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Number</h2>
      <p>debug: {newName}</p>
      {persons.map((person, index) => <Person key={index} name={person.name} />)}
    </div>
  )
}

export default App