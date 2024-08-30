import React from 'react'
import { useState } from 'react'
import './todoStyle.css'

function TaskCard({ task, filterstatus, todoList, setlist }) {
    const [edit, setedit] = useState(false)
    function handleChange(value) {
        let index = todoList.indexOf(task)
        let newarr = todoList
        newarr[index][2] = value
        setlist([...newarr])
    }
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        task[0] = formJson.newTaskName
        task[1] = formJson.newTaskDescription
        setedit(!edit)

    }

    function handleDelete() {
        // let index = todoList.indexOf(task)
        let newarr = todoList.filter((item) => item[0] !== task[0])
        // newarr.splice(index, 1)
        setlist([...newarr])
    }
    return (
        (filterstatus === "All" || filterstatus===(task[2])) ?
            <div>
                <div key={task[0]} className='taskCard'>
                    <p>Name: {task[0]}</p>
                    <p>Discription: {task[1]}</p>
                    <label htmlFor="status">Status  </label>
                    <select name="status" id="status" onChange={(e) => handleChange(e.target.value)} defaultValue={task[2]} className={task[2]}>
                        <option value="Completed">Completed</option>
                        <option value="Not-Completed">Not Completed</option>
                    </select>
                    <div className='EditDelete'>
                        <button onClick={() => setedit(!edit)}>Edit</button>
                        <button className='delete-btw' onClick={handleDelete}>Delete</button>
                    </div>
                    {
                        edit ? <form className='edit-window' onSubmit={handleSubmit} >
                            <input type="text" name='newTaskName' placeholder='newTaskName' defaultValue={task[0]} required />
                            <input type="text" name='newTaskDescription' placeholder='newTaskDescription' defaultValue={task[1]} required />
                            <button type='submit'>Change</button>
                        </form> : null
                    }


                </div>
            </div> : null
    )
}

export default TaskCard