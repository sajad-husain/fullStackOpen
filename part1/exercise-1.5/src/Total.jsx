import React from 'react'

const Total = ({ part }) => {
    const total = part.reduce((sum, item) => sum += item.exercise, 0)
    console.log(total);

    return (
        <div>
            <p>Number of exercises {total}</p>
        </div>
    )
}

export default Total