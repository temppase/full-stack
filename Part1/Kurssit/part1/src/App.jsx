const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}</h1>
    </div>
  )
}
const Part =(props) =>{
  return (
    <div>
      <p>
        {props.name} {props.count}</p>
    </div>
  )
}
const Content = (props) =>{
  console.log(props.parts[0].name)
  return (
    <div>
    <Part name={props.parts[0].name} count={props.parts[0].exercises}/>
    <Part name={props.parts[1].name} count={props.parts[1].exercises}/>
    <Part name={props.parts[2].name} count={props.parts[2].exercises}/>
    </div>

  )
}
const Total =(props) =>{
  var val = props.parts[0].exercises + 
            props.parts[1].exercises + 
            props.parts[2].exercises
  return (
    <div>
      <p>
        {val}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (

    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App