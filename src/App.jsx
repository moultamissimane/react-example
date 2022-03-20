import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Todo } from './components/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>number of checked todos: {count+1}</h1>
      {
        Array(10).fill(0).map((e, i) => <Todo text="learn react" id={i} isChecked={false} setCount={setCount} count={count} />)
      }
    </>
  )
}

export default App
