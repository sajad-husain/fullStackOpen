import React, { useState } from 'react'
import Details from './Details'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [input, setInput] = useState('')
  const [filteredData, setFilteredData] = useState([])


  const addNameHandler = (event) => {
    event.preventDefault()
    const nameNumber = {
      id: String(persons.length + 1),
      name: newName,
      number: newNumber
    }
    setPersons([...persons, nameNumber])
    console.log(persons);

    const matchedUser = persons.find(user => user.name === newName)
    matchedUser ? alert(`${newName} already exists...`) : ''

  }

  const personFilter = persons.filter(item => item.name.toLowerCase().includes(input))
  console.log('filtered persons', personFilter);


  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input onChange={e => setInput(e.target.value)} value={input} />
      <h2>add a new</h2>
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
      {personFilter.length === 0 ? persons.map(person => <Details key={person.id} name={person.name} number={person.number} />) : personFilter.map(item => <p>{item.name}</p>)}
    </div>
  )
}

export default App