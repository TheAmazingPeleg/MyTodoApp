import React, {useState} from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
    let id = 0;
    const [todos, setTodos] = useState([{
        id: ++id,
        content: 'go to the gym',
        isCompleted: true
    }, 
    {
        id: ++id,
        content: 'go to the mall',
        isCompleted: true
    }]);
    const onIsCompletedChange = (id) => {
        console.log("hey");
    }
    const onAddTodo = () => {
        const newTodo = {
            id: ++id,
            content: 'go to the dev club',
            isCompleted: true
        };
        setTodos([...todos, newTodo]);
    }
    return (<div>
        {todos.map(todo => <TodoItem key={todo.id} id={todo.id} content={todo.content} isCompleted={todo.isCompleted} onIsCompletedChange={onIsCompletedChange} />)}
        <button className="add-btn" onClick={onAddTodo}>+</button>
    </div>)
}

export default TodoList