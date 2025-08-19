import React from 'react'

const App = ({ notes }) => {
  return (
    <div>{notes.map((note, id) => <li key={id}>{note.content}</li>)}</div>
  )
}

export default App