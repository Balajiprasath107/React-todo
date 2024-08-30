import React, { useState } from 'react'
import AddTask from './AddTask'
import TaskDisplay from './TaskDisplay'
import './todoStyle.css'


function TodoBody() {

  const [todoList, setlist] = useState([])

  return (
    <div className='todobody'>
      <AddTask todoList={todoList} setlist={setlist} />
      <TaskDisplay todoList={todoList} setlist={setlist} />
    </div>
  )
}

export default TodoBody