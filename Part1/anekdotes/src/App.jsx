import { useState } from 'react'
const App = () => {
  const anecdotes = [
    '0. If it hurts, do it more often.',
    '1. Adding manpower to a late software project makes it later!',
    '2. The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    '3. Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    '4. Premature optimization is the root of all evil.',
    '5. Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    '6. Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    '7. The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  let points = Array(8).fill(0)
  const [votes, setVotes] = useState(points)
  const [vote, setVote] = useState(0)
  const [best, setBest] = useState(0)
  const handleVote = () => {
    points = votes
    points[selected] += 1
    setVotes(points)
    setVote(points[selected])
    setBest(votes.indexOf(Math.max(...votes)))
    console.log(points)
  }
  const handleSelected = () => {
    setSelected(Math.floor(Math.random() * 8))
    setVote(votes[selected])
  }
  console.log(selected)
  return (
    <div>
      {anecdotes[selected]}
      <h3>Votes</h3>
      {vote}
      <h4>Select</h4>
      <button onClick={() => handleSelected()}>Next</button>
      <button onClick={() => handleVote()}>Vote</button>
      <h5>The Best one</h5>
      {anecdotes[best]}
    </div>
  )
}

export default App
