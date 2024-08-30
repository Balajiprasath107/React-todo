import React, { useEffect, useState } from 'react'
import './todoStyle.css'
import Todofilter from './todofilter'
import TaskCard from './TaskCard'


function TaskDisplay({ todoList, setlist }) {
    const [filterstatus, setfilterstatus] = useState("All")
    let count = 1
    return (
        <>

            <Todofilter filterstatus={filterstatus} setfilterstatus={setfilterstatus} />
            <div>

                <div className='cardArea'>
                    {
                        todoList.map((task) => <TaskCard task={task} key={`${task[0]}+${count++}`} filterstatus={filterstatus} todoList={todoList} setlist={setlist} />)


                    }
                </div>

            </div>
        </>
    )
}

export default TaskDisplay