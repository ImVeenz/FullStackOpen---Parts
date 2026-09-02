
const Header = (props) => {
  
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Part = (props) => {

  return(
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  
  return (
    <div>
      <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercise}></Part>
      <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercise}></Part>
      <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercise}></Part>
    </div>
    
  )
}

const Total = (props) => {

  return (
    <p>
      Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
    </p>
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
    <>
      <Header course={course}/>
      <Content course={course}/>
      <Total course = {course}/>
    </>
  )
}

export default App