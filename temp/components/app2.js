import { useState } from "react";
import { Task } from "./components/Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, complete: true };
        } else {
          return task;
        }
      })
    );
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false,
    };
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
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
            <Task
              taskName={task.taskName}
              complete = {task.complete}
              id={task.id}
              deleteTask={deleteTask}
              completeTask={completeTask}
            ></Task>
          );
        })}
      </div>
    </div>
  );
}

export default App;
