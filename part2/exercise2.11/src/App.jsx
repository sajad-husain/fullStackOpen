import React, { useState } from 'react'
import Details from './Details'
import Form from './Form'
import FIlter from './FIlter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [input, setInput] = useState('')



  const personFilter = persons.filter(item => item.name.toLowerCase().includes(input))
  console.log('filtered persons', personFilter);

  return (
    <div>
      <h2>Phonebook</h2>
      < FIlter input={input} setInput={setInput} />
      <Form persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      {
        personFilter.length === 0
          ? persons.map(person => <Details key={person.id} name={person.name} number={person.number} />)
          : personFilter.map(person => < Details key={person.id} name={person.name} number={person.number} />)
      }
    </div>
  )
}

export default App