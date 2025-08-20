import React from 'react'
import Part from './Part'

const Content = ({ courses }) => {
    console.log(courses);
    const total = courses.reduce((sum, acc) => sum += acc.parts.exercises)
    return (
        <div>
            {courses.map(course => (
                <div key={course.id}>
                    <strong>{course.name}</strong>
                    {course.parts.map(part =>
                        <Part key={part.id} name={part.name} exercises={part.exercises} />
                    )}
                    <strong>total of {total} exercises</strong>
                </div>
            ))}
        </div>
    )
}

export default Content