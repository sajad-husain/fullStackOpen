import React, { useEffect, useState } from 'react'
import Details from './Details'
import Form from './Form'
import FIlter from './FIlter'
import getDataFromServer from './services/axiosCrud'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])

  const [input, setInput] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)


  useEffect(() => {
    getDataFromServer
      .getPersonsData()
      .then(data => setPersons(data))
    console.log('data is coming from json server');

  }, [])

  console.log(typeof persons, 'list persons is', persons);

  const deleteHandler = (id) => {
    console.log('deleted id', id);

    getDataFromServer
      .removePerson(id)
      .then(res => setPersons(persons => persons.filter(item => item.id !== id)))
      .catch(err => console.error('Delete Request Failed', err))
  }

  const personFilter = persons.filter(item => item.name && item.name.toLowerCase().includes(input.toLowerCase()))
  console.log('filtered persons and its type is ', typeof personFilter, personFilter);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      < FIlter input={input} setInput={setInput} />
      <Form persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>

      {
        personFilter.length === 0
          ? persons.map(person => <Details key={person.id} name={person.name} number={person.number} deleteHandler={() => deleteHandler(person.id)} />)
          : personFilter.map(person => < Details key={person.id} name={person.name} number={person.number} deleteHandler={() => deleteHandler(person.id)} />)
      }
    </div>
  )
}

export default App