import TaskItem from './TaskItem';

import styles from './TaskList.module.css'; //css for this component only

const TaskList = ( {tasks, deleteTask} ) =>{
    return <ul className={styles.tasks}>
        {tasks.sort((a,b) => b.id - a.id).map(task => ( //sort- way to opposite the direction of an object. (mapping is with (), not with {} !)
            <TaskItem 
                key={task.id}
                task={task}
                deleteTask={deleteTask}
            />
        ))}
    </ul>
}

export default TaskList