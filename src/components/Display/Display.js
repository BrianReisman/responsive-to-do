import React, { useState } from "react";
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

const Display = ({
  tasks,
  toggleTaskCompleted,
  deleteTask,
  deleteCompleted,
}) => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const onlyActiveTasks = tasks.filter((task) => !task.completed);
  const onlyCompletedTasks = tasks.filter((task) => task.completed);

  const TasksToRender =
    activeFilter === "all"
      ? tasks
      : activeFilter === "active"
      ? onlyActiveTasks
      : onlyCompletedTasks;

  const RenderedTasks = TasksToRender.map((task) => {
    return (
      <Task key={task.id}>
        <Input
          type="checkbox"
          // make checked dynamic based on completed prop on taskObj.
          // checked={false}
          name=""
          id={task.id}
          onClick={toggleTaskCompleted}
        />
        <CheckboxLabel htmlFor={task.id} />
        <TaskText completed={task.completed}>{task.task}</TaskText>
        <Close id={task.id} onClick={deleteTask} />
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
      {tasks.length === 0 ? noTasks : null}
      {RenderedTasks}
      {tasks.length === 0 ? null : (
        <Dashboard
          deleteCompleted={deleteCompleted}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      )}
    </DisplayRoot>
  );
};

export default Display;
