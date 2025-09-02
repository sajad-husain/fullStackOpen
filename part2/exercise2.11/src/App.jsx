import React, { useEffect, useState } from 'react'
import Details from './Details'
import Form from './Form'
import FIlter from './FIlter'
import axios from 'axios'
import getDataFromServer from './services/axiosCrud'


const App = () => {
  const [persons, setPersons] = useState([])

  const [input, setInput] = useState('')

  useEffect(() => {
    getDataFromServer
      .getPersonsData()
      .then(data => setPersons(data))
    console.log('data is coming from json server');

  }, [])

  console.log(typeof persons);

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