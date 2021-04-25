import React, { useState } from 'react'
import './App.css';
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList';
import FilterTask from './Components/FilterTask'

function App() {

  const [filteredTaskList, setFilteredTaskList] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");


  return (
    <div className="App">
      <h2>Todo List Application </h2>
      
      <AddTask />
     
      <FilterTask setFilteredTaskList={setFilteredTaskList}
        filterStatus={filterStatus} setFilterStatus={setFilterStatus}
      />
 
 
      <TaskList filteredTaskList={filteredTaskList} filterStatus={filterStatus} />
      
    </div>
  );
}

export default App;
