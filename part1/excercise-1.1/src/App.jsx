import Header from './Header'
import Content from './Content'
import Total from './Total'

function App() {
  const course = 'Half Stack application develpment'
  const part1 = 'Fundamentals of React'
  const excercise1 = 10
  const part2 = 'Using props to pass data'
  const excercise2 = 7
  const part3 = "State of a component"
  const exercise3 = 14

  return (
    <>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercise1={excercise1} exercise2={excercise2} exercise3={exercise3} />
      <Total exercise1={excercise1} exercise2={excercise2} exercise3={exercise3} />
    </>
  )
}

export default App
