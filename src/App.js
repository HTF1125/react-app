

import { useState } from "react";


function App() {

  const [todoList, setTodoList] = useState(["test"]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {

    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  const deleteTask = (taskName)  => {

    setTodoList(todoList.filter((task) => task !== taskName));
  };


  return (
    <div className="App"> 
      <div className="addTask">
        <input onChange={handleChange}></input>
        <button onClick={addTask}>Add</button>
      </div>

      <div className="list">
        {todoList.map((task) => {
          return (
            <div><h1>{task}</h1>
            <button onClick={() => deleteTask(task)}>X</button></div>

          )
        })}

      </div>



    </div>
  )

};

export default App;
