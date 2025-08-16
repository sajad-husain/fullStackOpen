import Header from './Header'
import Content from './Content'
import Total from './Total'

function App() {


  const course = 'Half Stack application develpment'
  const part = [{
    name: 'Fundamentals of React',
    exercise: 10
  },
  {
    name: 'Using props to pass data',
    exercise: 7
  },
  {
    name: "State of a component",
    exercise: 14
  }
  ]
  // const part1 = 'Fundamentals of React'
  // const excercise1 = 10
  // const part2 = 'Using props to pass data'
  // const excercise2 = 7
  // const part3 = "State of a component"
  // const exercise3 = 14

  return (
    <>
      <Header course={course} />
      <Content part={part} />
      <Total part={part} />
    </>
  )
}

export default App
