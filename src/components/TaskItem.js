import { useState } from 'react';
import styles from './TaksItem.module.css'; //css for this component only

const TaskItem = ( { task, deleteTask } ) => {
    const [isChecked, setIsChecked] = useState(task.checked)

    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked)
    }
    let textDecor;
    if(isChecked){
        textDecor = styles.deleted;
    }else{
        textDecor = styles.normal;
    }
    
    return <li className={styles.task}>
        <div className={styles["task-group"]}>
            <input 
                type="checkbox"
                className={styles.checkbox}
                checked={isChecked}
                onChange={handleCheckboxChange}
                name={task.name}
                id={task.id}
            />
            <label className={textDecor}>
                {task.name}
            </label>
        </div>
        <div className={styles["task-group"]}>
            <button
                className={`btn ${styles.deleteBtn}`}
                aria-label={`Update ${task.name} Task`}
                onClick={() => deleteTask(task.id)} //onclick function should be inside a function to not execute automaticly first render
            >
                <img src="https://icon-library.com/images/delete-icon-image/delete-icon-image-17.jpg" width="25px"/>
            </button>
        </div>
    </li>
}

export default TaskItem