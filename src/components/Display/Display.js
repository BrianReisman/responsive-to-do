import React from "react";
import {
  DisplayRoot,
  EmptyMessageText,
  EmptyMessageContainer,
  Task,
  Close,
  TaskText,
  Input,
  CheckboxLabel,
} from "./Display.elements";
import Dashboard from "./Dashboard/Dashboard";

const Display = (props) => {
  const TasksToRender = props.tasks.map((task) => {
    console.log();
    return (
      <Task key={task.id}>
        <Input
          type="checkbox"
          name=""
          id={task.id}
          onClick={props.toggleTaskCompleted}
        />
        <CheckboxLabel htmlFor={task.id} />
        <TaskText>{task.task}</TaskText>
        <Close />
      </Task>
    );
  });

  const noTasks = (
    <EmptyMessageContainer>
      <EmptyMessageText>
        You have no items in your todo list. Create an item to begin tracking
        your list.
      </EmptyMessageText>
    </EmptyMessageContainer>
  );

  return (
    <DisplayRoot>
      {props.tasks.length === 0 ? noTasks : null}
      {TasksToRender}
      {props.tasks.length === 0 ? null : <Dashboard />}
    </DisplayRoot>
  );
};

export default Display;
