import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const taskId = TASKS.map((task,index)=>{
     return  {...task,id:index}
  })

  const[category, setCategory]= useState('All')

  const[tasks, setTasks]=useState(taskId)




  function addTask(newTask){

      setTasks([newTask,...tasks])

  }

  function removeTask(taskId){
    const filteredTask = tasks.filter((task)=>{
      if(taskId===task.id){
        return false
      }return true
    })
    setTasks(filteredTask)
  }



  const filteredNames = tasks.filter((task)=>{
    if(category === 'All'){
      return true
    }else{
      return category === task.category
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter updateCategory={setCategory} categories={CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit={addTask} categories={CATEGORIES} />
      <TaskList removeTask={removeTask} tasks ={filteredNames}/>
    </div>
  );
}

export default App;
