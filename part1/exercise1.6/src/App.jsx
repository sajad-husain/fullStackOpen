import React, { useState } from 'react'

const Statistics = ({ text, value }) => {

  return (
    <div>
      <table>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </table>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + bad + neutral;
  let average = (good + neutral + bad) / 3;
  let percentge = (good / all) * 100

  const goodFeedback = () => setGood(good + 1)
  const neutralFeedback = () => setNeutral(neutral + 1)
  const badFeedback = () => setBad(bad + 1)
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodFeedback}>good</button>
      <button onClick={neutralFeedback}>neutral</button>
      <button onClick={badFeedback}>bad</button>
      <h2>statistics</h2>
      <Statistics text={"good"} value={good} />
      <Statistics text={"neutral"} value={neutral} />
      <Statistics text={"bad"} value={bad} />
      <Statistics text={"all"} value={all} />
      <Statistics text={"average"} value={average} />
      <Statistics text={"percentage"} value={percentge} />

    </div>
  )
}

export default App