import React from "react";
import {
  DisplayRoot,
  EmptyMessageText,
  EmptyMessageContainer,
  Task,
  Close,
  TaskText,
} from "./Display.elements";
import Dashboard from "./Dashboard/Dashboard";

const Display = (props) => {
  const TasksToRender = props.tasks.map((task) => {
    console.log()
    return (
      <Task>
        <input type="checkbox" name="" id={task.id} onClick={props.toggleTaskCompleted} />
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
      {noTasks}
      {TasksToRender}
      <Dashboard />
    </DisplayRoot>
  );
};

export default Display;
