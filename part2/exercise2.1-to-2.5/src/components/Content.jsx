import React from 'react'
import Part from './Part'

const Content = ({ course }) => {
    return (
        <Part name={course.name} exercise={course.exercise} />
    )
}

export default Content