import React from 'react'

const Details = ({ name, number }) => {

    const deleteHandler = (id) => {
        console.log('deleted');

    }
    return (
        <div>
            <p>{name} {number} <button style={{ backgroundColor: 'skyblue', border: 'none', padding: '3px', borderRadius: '3px' }} onClick={() => deleteHandler(id)}>Delete</button></p>
        </div>
    )
}

export default Details