import React, { useState } from 'react'

const FIlter = ({ input, setInput }) => {

    return (
        <div>
            filter shown with <input onChange={e => setInput(e.target.value)} value={input} />
        </div>
    )
}

export default FIlter