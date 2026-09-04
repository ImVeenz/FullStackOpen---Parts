import { useState } from 'react'


const Header = ({text}) =>{
  return(
    <h1>{text}</h1>
  )
}

const Button=({onClick,text})=>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text,value}) => {
  return(
    <tr>
      <td>
        {text} 
      </td>

        <td>
          {value}
        </td>
    </tr>
  )
}

const Statistics = ({good,neutral,bad}) =>{
  const total = good + neutral + bad
  const average = (good-bad)/total
  const positive = (good/total)*100


  if (total === 0) {
    return(    
        <p>No feedback given</p>    
    )
  }
    
    return (
  <table>
    <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={`${positive} %`} />
    </tbody>
  </table>
)

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    
    <div>
      <Header text = "give feedback"/>

      <Button onClick={()=>setGood(good + 1)} text="good"/>
      <Button onClick={()=>setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={()=>setBad(bad + 1)} text= "bad"/>

      <Header text="statistics"/>

      <Statistics good = {good} neutral={neutral} bad = {bad}/>
    
    </div>
  )
}

export default App