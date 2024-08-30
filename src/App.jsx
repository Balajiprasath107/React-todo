import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import TodoBody from './components/TodoBody'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title />
      <TodoBody />
    </>
  )
}

export default App
