import React from "react";
import {
  Input,
  CheckboxLabel,
  TaskRoot,
  TaskText,
  Close,
} from "../Display.elements";

const Task = ({ task, toggleTaskCompleted, deleteTask }) => {
  return (
    <TaskRoot key={task.id}>
      <Input
        type="checkbox"
        onChange={toggleTaskCompleted}
        checked={task.completed}
        name=""
        id={task.id}
      />
      <CheckboxLabel htmlFor={task.id} />
      <TaskText completed={task.completed}>{task.task}</TaskText>
      <Close id={task.id} onClick={deleteTask} />
    </TaskRoot>
  );
};

export default Task;
