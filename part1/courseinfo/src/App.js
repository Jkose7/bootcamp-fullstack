const Title = ({course}) =>{
  return <h1>{course}</h1>
}
const Part = ({part, exercises}) =>{
  return <p>{part} {exercises}</p>
}
const Sum = ({op1,op2,op3}) =>{
  return <p>{op1 + op2 + op3}</p>
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Title course={course}></Title>
      <Part part={part1} exercises={exercises1}></Part> 

      <Part part={part2} exercises={exercises2}></Part> 

      <Part part={part3} exercises={exercises3}></Part> 
    
      <Sum op1={exercises1} op2={exercises2} op3={exercises3}></Sum>
    </div>
  )
}

export default App