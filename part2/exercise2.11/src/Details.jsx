import React from 'react'
import deleteContact from './services/axiosCrud'

const Details = ({ name, number, person }) => {

    console.log(person.id);

    const deleteHandler = () => {

        console.log('deleted');

    }
    return (
        <div>
            <p>{name} {number} <button style={{ backgroundColor: 'skyblue', border: 'none', padding: '3px', borderRadius: '3px' }} onClick={() => deleteHandler()}>Delete</button></p>
        </div>
    )
}

export default Details