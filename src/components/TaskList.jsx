import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../feature/taks/tasksSlice";
import { Link, NavLink } from "react-router-dom";

function TaskList() {
  const tasksList = useSelector((state) => state.tasks);

  console.log(tasksList);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTask(id));
    console.log(id);
  };

  return (
    <div>
      <header>
        <h1>Tasks {tasksList.length}</h1>
        <NavLink to="/add-task">Create Task</NavLink>
      </header>

      {tasksList.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <NavLink to={`update-task/${task.id}`}>Update</NavLink>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
