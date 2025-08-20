import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content key={course.id} course={course} />
        </div>
    )
}

export default Course