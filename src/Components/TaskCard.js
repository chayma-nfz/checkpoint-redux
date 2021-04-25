import React from 'react'
import './TaskCard.css'

import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, completeTask } from '../Redux/Actions/actions'
import EditTask from './EditTask'

const Task = ({ task }) => {

  const dispatch = useDispatch()

  return (
    <div className="card">
      <span
        
        className={task.isDone ? "test" : null}
      >{task.title}</span>
      
      <div className="card">
      <Button variant="danger"
        onClick={() => dispatch(deleteTask(task.id))}>
        Delete
            </Button>
          
      <Button variant="primary"
        onClick={() => dispatch(completeTask(task.id))}
      >{task.isDone ? "UnDone" : "Done"}</Button>
      
    
<EditTask task={task} />
</div>
    </div>
    
  )
}

export default Task
