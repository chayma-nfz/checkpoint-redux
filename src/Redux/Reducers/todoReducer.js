
import { ADD_TASK, DELETE_TASK, EDIT_TASK, COMPLETE_TASK }
    from '../Actions/constante'


const initState = {
    taskList: [
        { id: Math.random(), title: "Todo1", isDone: false },
        { id: Math.random(), title: "Todo2", isDone: false },
        { id: Math.random(), title: "Todo3", isDone: false },
    ]
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {

        case ADD_TASK:
            return {
                ...state,
                taskList: [...state.taskList, action.payload]
            }

        case DELETE_TASK:
            return {
                ...state,
                taskList: state.taskList.filter(task => task.id !== action.payload)
            }

        case EDIT_TASK:
            return {
                ...state,
                taskList: state.taskList.map(task =>
                    task.id === action.payload.id ? { ...task, title: action.payload.newTitle } : task
                )
            }

        case COMPLETE_TASK:
            return {
                ...state,
                taskList: state.taskList.map(task =>
                    task.id === action.payload ? { ...task, isDone: ! task.isDone } : task
                )
            }


        default: return state
    }
}

export default todoReducer