import React, {useState} from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks(oldTasks => [...oldTasks, task]);
  }

  const deleteTask = (id) => {
    setTasks(oldTasks => oldTasks.filter(t => t.id !== id)) // filter a new object without the task with the entered id
  }

  return <div className="container">
    <header>
      <h1>Tasks</h1>
    </header>
    <Form addTask={addTask}/>
    {
      tasks && <TaskList 
        tasks={tasks}
        deleteTask={deleteTask}
      /> //prevent errors for empry object rendering
    }
  </div>
}

export default App