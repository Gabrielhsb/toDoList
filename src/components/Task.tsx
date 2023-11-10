import { useContext, useState } from 'react';
import styles from './Task.module.css';
import { Trash } from '@phosphor-icons/react';
import { ItemTask, TaskContext } from '../Context/TaskContext';

interface TaskProps {
    ItemTask: ItemTask
    deleteTask: (task: ItemTask) => void
}

export function Task({ ItemTask, deleteTask }: TaskProps) {
    const { dispatch } = useContext(TaskContext);

    function handleCompleteTask() {
        setTask({
            id: task.id,
            content: task.content,
            completed: !task.completed
        })

        dispatch({
            type: 'COMPLETE_TASK',
            payload: task
        })
    }

    const [task, setTask] = useState<ItemTask>(ItemTask)
    return (
        <div className={styles.taskContainer}>
            <div className={styles.taskContent}>
                <input type="checkbox" className={styles.checkbox} checked={task.completed} onChange={handleCompleteTask} />
                <span className={styles.content + (task.completed ? ' ' + styles.completedTask : '')}>
                    {task.content}
                </span>
            </div>
            <div className={styles.trashButton}>
                <Trash size={24} color="#808080" onClick={() => deleteTask(task)} />
            </div>
        </div>
    );
}
