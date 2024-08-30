import React from 'react'
import './todoStyle.css'

function AddTask({ todoList, setlist }) {

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson, todoList);

        setlist([...todoList, [formJson.todoName, formJson.todoDescription,"Not-Completed"]])
        e.target.reset()
    }
    return (
        <div>
            <div className='TodoAddtasks'>
                <form method="post" onSubmit={handleSubmit}>
                    <input className="Todoinputs" type="text" name='todoName' placeholder='Todo Name' required />
                    <input className="Todoinputs" type="text" name='todoDescription' placeholder='Todo Discription' required />
                    <button className='Todoadd' type="submit">Add Todo</button>
                </form>
            </div>
        </div>
    )
}

export default AddTask