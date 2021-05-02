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
  console.log(props.tasks);

  const TasksToRender = props.tasks.map((task) => {
    return (
      <Task key={task.id}>
        <Input
          type="checkbox"
          // make checked dynamic based on completed prop on taskObj.
          // checked={false}
          name=""
          id={task.id}
          onClick={props.toggleTaskCompleted}
        />
        <CheckboxLabel htmlFor={task.id} />
        <TaskText completed={task.completed}>{task.task}</TaskText>
        <Close id={task.id} onClick={props.deleteTask} />
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
