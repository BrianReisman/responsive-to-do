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
    <TaskRoot>
      <Input
        type="checkbox"
        checked={task.completed}
        name=""
        id={task.id}
        onChange={toggleTaskCompleted}
      />
      <CheckboxLabel htmlFor={task.id} />
      <TaskText completed={task.completed}>{task.task}</TaskText>
      <Close id={task.id} onClick={deleteTask} />
    </TaskRoot>
  );
};

export default Task;
