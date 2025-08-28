import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])


  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      }
      )
  }, [])



  return (
    <div>
      <h1>Phonebook</h1>
      {persons.map(item => <p key={item.id}>{item.name} {item.number}</p>)}
    </div>
  )
}

export default App