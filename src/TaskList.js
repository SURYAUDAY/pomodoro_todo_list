// TaskList.js
import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
  return (
    <div
      style={{
        marginLeft: 600,
        maxWidth: 400,
        //marginTop: -171,
      }}
    >
      <h2 style={{ marginBottom: "10px", fontFamily: "poppins sans-serif" }}>
        Task List
      </h2>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onTaskComplete={onTaskComplete}
          onTaskDelete={onTaskDelete}
          style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
        />
      ))}
      <img
        src="../asset/rickymonty.png"
        alt="watching at timer"
        style={{
          marginLeft: "-434px",
          marginTop: "-300px",
          position: "fixed",
          width: "400px",
        }}
      />
    </div>
  );
};

export default TaskList;
