import React from 'react'
import Part from './Part'

const Content = ({ courses }) => {
    return (
        <div>
            {courses.map(course => {
                const total = course.parts.reduce((sum, acc) => sum += acc.exercises, 0)
                return (

                    <div key={course.id}>
                        <p><strong>{course.name}</strong></p>
                        {course.parts.map(part =>
                            <Part key={part.id} name={part.name} exercises={part.exercises} />
                        )}
                        <p><strong>total of {total} exercises</strong></p>
                    </div>

                )
            })}
        </div>
    )
}

export default Content