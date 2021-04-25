
import { ADD_TASK, DELETE_TASK, EDIT_TASK, COMPLETE_TASK } from './constante'

export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload
    }
}
export const deleteTask = (payload) => {
    return {
        type: DELETE_TASK,
        payload
    }
}

export const editTask = (id, newTitle) => {
    return {
        type: EDIT_TASK,
        payload: { id, newTitle }
    }
}

export const completeTask = (payload) => {
    return {
        type: COMPLETE_TASK,
        payload
    }
}