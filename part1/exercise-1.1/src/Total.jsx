import React from 'react'

const Total = ({ exercise1, exercise2, exercise3 }) => {
    const total = exercise1 + exercise2 + exercise3;
    return (
        <div>
            <p>Number of exercises {total}</p>
        </div>
    )
}

export default Total