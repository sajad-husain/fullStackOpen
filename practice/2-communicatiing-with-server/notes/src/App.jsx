import React from 'react'

const App = ({ notes }) => {
  return (
    <div>{notes.map(note => <li>{note.content}</li>)}</div>
  )
}

export default App