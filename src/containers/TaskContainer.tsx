
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Task } from '../components/Task'
import style from './TaskContainer.module.css'
import { ItemTask, TaskContext } from '../Context/TaskContext'

export function TaskContainer() {
    const [task, setTask] = useState<ItemTask>({
        id: 0,
        content: "",
        completed: false
    });
    const { state, dispatch } = useContext(TaskContext);

    function  createTask(event: ChangeEvent<HTMLInputElement>) {
        console.log(task)
        setTask({
            id: state.task.length + 1,
            content: event.target.value || "",
            completed: false
        })
        console.log(task)
        console.log(state.task)
    }
    function handleCreateTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        dispatch({ type: 'ADD_TASK', payload: task })
        setTask({
            id: 0,
            content: "",
            completed: false
        })
    }



    function handleDeleteTask(task: ItemTask) {
        dispatch({ type: 'REMOVE_TASK', payload: task })
    }
    return (
        <div className={style.container}>
            <form className={style.inputContainer} onSubmit={(e) => handleCreateTask(e)}>
                <Input placeholder="Adicione uma nova tarefa" onChange={(e) => createTask(e)} value={task.content}/>
                <Button text="Criar" type="submit"/>
            </form>
            <div className={style.wrapper}>
                <div className={style.headerContainer}>
                    <div className={style.infoContainer}>
                        <p>Tarefas criadas</p>
                        <span className={style.counter}>{state.task.length}</span>
                    </div>
                    <div className={style.infoContainer}>
                        <p>Concluídas</p>
                        <span className={style.counter}>{`${state.task.filter((task) => task.completed === true).length} de ${state.task.length}`}</span>
                    </div>
                </div>
                {state.task.map((task) => (
                    <Task key={task.id} ItemTask={task} deleteTask={() => handleDeleteTask(task)} />
                ))}
            </div>
        </div>
    )
}



