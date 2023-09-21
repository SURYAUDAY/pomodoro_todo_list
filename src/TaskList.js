// TaskList.js
import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onTaskComplete={onTaskComplete}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
