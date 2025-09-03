import React, { useState } from 'react'
import getData from './services/axiosCrud'

const Form = ({ persons, setPersons, setErrorMessage }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addNameHandler = (event) => {
        event.preventDefault()
        const nameNumber = {
            id: String(persons.length + 1),
            name: newName,
            number: newNumber
        }

        getData.createNewPersons(nameNumber)
            .then(data => {
                setPersons(persons.concat(data))
                setNewName('')
                setNewNumber('')

            })
            .then(item => {

                setTimeout(() => {
                    setErrorMessage(
                        `Name: ${newName} and numer ${newNumber} created in Phonebook`
                    )
                }, 2000);
            })



        const matchedUser = persons.find(user => user.name === newName)
        matchedUser ? alert(`${newName} already exists...`) : ''

    }

    return (
        <div>
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
        </div>
    )
}

export default Form