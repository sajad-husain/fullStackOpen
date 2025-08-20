import React from 'react'

const Part = ({ item }) => {

    return (
        <div>
            <p>{item.name} {item.exercises}</p>
        </div>
    )
}

export default Part