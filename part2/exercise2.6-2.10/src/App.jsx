import React, { useState } from 'react'
import Details from './Details'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNameHandler = (event) => {
    event.preventDefault()
    const nameNumber = {
      id: String(persons.length + 1),
      name: newName,
      number: newNumber
    }
    setPersons([...persons, nameNumber])
    console.log(persons);



  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNameHandler}>
        <div>
          Name: <input onChange={(event) => setNewName(event.target.value)} value={newName} />
          <br />
          Number: <input onChange={(event) => setNewNumber(event.target.value)} value={newNumber} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Details key={person.id} name={person.name} number={person.number} />)}
    </div>
  )
}

export default App