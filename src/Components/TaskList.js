import React from 'react'
import { useSelector } from 'react-redux'

import './TaskList.css'
import TaskCard from './TaskCard'

const TaskList = ({ filteredTaskList, filterStatus }) => {

  const taskList = useSelector(state => state.todoReducer.taskList)


  return (
    <div className="task-list">

      {filterStatus === "doneTasks" || filterStatus === "undoneTasks" ?
        filteredTaskList.map(task =>
          <TaskCard task={task} key={task.id} />
        )
        :
        taskList.map(task =>
          <TaskCard task={task} key={task.id} />
        )
      }
    </div>
  )
}

export default TaskList
