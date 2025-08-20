import React from 'react'
import Part from './Part'

const Content = ({ courses }) => {
    console.log(courses);
    return (
        <div>
            {courses.map(course => (
                <div>
                    <strong>{course.name}</strong>
                    {course.parts.map(part =>
                        <Part key={part.id} name={part.name} exercises={part.exercises} />
                    )}
                </div>
            ))}
        </div>
    )
}

export default Content