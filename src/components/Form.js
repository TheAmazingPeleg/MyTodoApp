import { useState } from "react";


const Form = ( { addTask } ) => {
    const [task, setTask] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault(); //prevent the default refresh after submit
        addTask({
            name: task,
            checked: false,
            id: Date.now() //timestemp for random key
        })
        setTask("");
    }

    return <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
            <input
                type="text"
                id="task"
                className="input"
                value={task}
                onInput={(e) => setTask(e.target.value)} //update the task by value's data 
                required
                autoFocus
                maxLength={60}
                placeholder="Enter a new Task"
            />
        </div>
        <button
            className="btn"
            aria-label="Add Task" //help to assistive technology understand the purpose of the button
            type="submit"
        >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Blue_check.svg/600px-Blue_check.svg.png" width="27px"/>
        </button>
    </form>
}

export default Form