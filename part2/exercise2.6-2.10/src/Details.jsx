import React from 'react'

const Details = ({ name, number }) => {
    console.log("number in details component", number);

    return (
        <div>
            <p>{name} {number}</p>
        </div>
    )
}

export default Details