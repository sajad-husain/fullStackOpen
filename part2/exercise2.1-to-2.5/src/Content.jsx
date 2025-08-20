import React from 'react'
import Part from './Part'

const Content = ({ course }) => {

    return (
        <div>
            {course.map(item => <Part key={item.id} item={item} />)}
        </div>
    )
}

export default Content