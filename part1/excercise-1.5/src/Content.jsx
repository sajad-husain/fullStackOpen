import React from 'react'

const Content = ({ part }) => {
    const renderData = part.map(items => <p>{items.name} {items.exercise}</p>
    )
    return (
        <div>
            {renderData}
        </div>
    )
}

export default Content