import { Dispatch, createContext, useReducer } from "react";

export interface ItemTask {
    id: number
    content: string
    completed: boolean
}

interface TaskState {
    task: ItemTask[]
}

interface TaskAction {
    type: 'ADD_TASK' | 'REMOVE_TASK' | 'COMPLETE_TASK';
    payload: ItemTask
}

const initialState: TaskState = {
    task: []
}


function reducer(state: TaskState, action: TaskAction): TaskState {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                task: [...state.task, action.payload]
            }
        case 'REMOVE_TASK':
            return {
                ...state,
                task: state.task.filter((item) => item.id !== action.payload.id)
            }
        case 'COMPLETE_TASK':
            return {
                ...state,
                task: state.task.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }
                   return item
                })
            }
        default:
            return state
    }
}

interface TaskContextProps {
    state: TaskState;
    dispatch: Dispatch<TaskAction>;
}

interface TaskProviderProps {
    children?: React.ReactNode;
}

export const TaskContext = createContext<TaskContextProps>({ state: initialState, dispatch: () => null });

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }: TaskProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};



