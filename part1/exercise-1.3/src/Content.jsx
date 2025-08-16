import React from 'react'
import Part from './Part'
const Content = ({ part1, part2, part3, exercise1, exercise2, exercise3 }) => {
    return (
        <div>
            <Part excercise={exercise1} part={part1} />
            <Part excercise={exercise2} part={part2} />
            <Part excercise={exercise3} part={part3} />
        </div>
    )
}

export default Content