// TaskList.js
import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
  return (
    <div
      style={{
        marginLeft: 600,
        maxWidth: 400,
        marginTop: -271,
      }}
    >
      <h2>Task List</h2>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onTaskComplete={onTaskComplete}
          onTaskDelete={onTaskDelete}
          style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
        />
      ))}
    </div>
  );
};

export default TaskList;
