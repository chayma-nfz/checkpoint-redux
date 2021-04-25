import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import './FilterPart.css'
import 'bootstrap/dist/css/bootstrap.css'


const FilterTask = ({ filterStatus, setFilterStatus, setFilteredTaskList }) => {

  const taskList = useSelector(state => state.todoReducer.taskList)

  useEffect(() => {
    filterTask()
  })

  const filterTask = () => {
    switch (filterStatus) {
      case "allTasks": setFilteredTaskList(taskList); break;
      case "doneTasks": setFilteredTaskList(taskList.filter(task => task.isDone === true)); break;
      case "undoneTasks": setFilteredTaskList(taskList.filter(task => task.isDone === false)); break;
      default: return taskList
    }
  }

  return (
    <div className="part1">

      <Button variant="primary"
        onClick={() => setFilterStatus("allTasks")}
      >All Tasks</Button>

      <Button variant="primary"
        onClick={() => setFilterStatus("doneTasks")}
      >Done Tasks</Button>

   
      <Button variant="primary"
        onClick={() => setFilterStatus("undoneTasks")}
      >Undone Tasks</Button>

    </div >
  )
}

export default FilterTask
