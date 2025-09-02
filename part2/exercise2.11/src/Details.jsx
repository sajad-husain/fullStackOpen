import React from 'react'
import deleteContact from './services/axiosCrud'

const Details = ({ name, number, person }) => {

    console.log(person.id);

    const deleteHandler = (id) => {

        deleteContact
            .removePerson(id)
            .then(response => person.filter(item => person.id !== id))


    }
    return (
        <div>
            <p>{name} {number} <button style={{ backgroundColor: 'skyblue', border: 'none', padding: '3px', borderRadius: '3px' }} onClick={() => deleteHandler(person.id)}>Delete</button></p>
        </div>
    )
}

export default Details