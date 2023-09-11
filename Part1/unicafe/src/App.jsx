import { useState } from 'react'
const Button = ({ handleClick, text }) => {  
  return (
    <button onClick={handleClick}>    
      {text}  
    </button>
  )
}
const Statics = (props) =>{
  if(props.total === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return(
  <div>
        <h3>Statistics</h3>
    <table>
      <tbody>
        <StaticsTableRow text={'Good'} value={props.good}/>
        <StaticsTableRow text={'Neutral'} value={props.neutral}/>
        <StaticsTableRow text={'Bad'} value={props.bad}/>
        <StaticsTableRow text={'Total'} value={props.total}/>
        <StaticsTableRow text={'Avarage'} value={props.avarage}/>
        <StaticsTableRow text={'Percentage'} value={props.percentage}/>
      </tbody>
    </table>
  </div>
  )
}
const StaticsTableRow = ({text, value})=>{
  return(
      <tr>
        <td>{text}</td><td>{value}</td>
      </tr>

  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avarage, setAvarage] = useState(0)
  const [total, setTotal] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [allClicks, setAll] = useState([])
  const handleGoodClick = () => {
    const data = allClicks.concat(1)
    setAll(data)
    const init = 0;
    const sumOf = data.reduce((accumulator, currentValue) => accumulator + currentValue, init);
    const updateTotal = total + 1
    const updateGood = good + 1
    setTotal(updateTotal) 
    setGood(updateGood)
    setAvarage( sumOf / updateTotal)
    setPercentage(updateGood / updateTotal * 100)
  }
  const handleNeutralClick = () => {
    const data = allClicks.concat(0)
    setAll(data)
    const init = 0;
    const sumOf = data.reduce((accumulator, currentValue) => accumulator + currentValue, init);
    const updateTotal = total + 1
    const updateNeutral = neutral + 1
    setTotal(updateTotal)
    setNeutral(updateNeutral)
    setAvarage(sumOf / updateTotal)
    setPercentage(good / updateTotal * 100)
  }
  const handleBadClick = () => { 
    const data = allClicks.concat(-1)
    setAll(data)
    const init = 0;
    const sumOf = data.reduce((accumulator, currentValue) => accumulator + currentValue, init);
    const updateTotal = total + 1
    const updateBad = bad + 1
    setTotal(updateTotal) 
    setBad(updateBad)
    setAvarage(sumOf / updateTotal)
    setPercentage(good / updateTotal * 100)
  }
  return (
    <div>
      <h1>Unicafe</h1>
        <Button handleClick={handleGoodClick} text='good' />        
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
        <Statics good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          avarage={avarage} 
          percentage={percentage} />
    </div>
  )
}

export default App
