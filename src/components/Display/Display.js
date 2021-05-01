import React, { useState } from "react";
import {
  Task,
  TaskText,
  Close,
  DisplayRoot,
  EmptyMessageText,
  EmptyMessageContainer,
  Dashboard,
  ItemsLeft,
  Filter,
  FilterOption,
  ClearCompleted,
} from "./Display.elements";

const Display = (props) => {
  const [activeFilter, setActiveFilter] = useState("all");

  // const tasks = props.tasks;
  // console.log(tasks.forEach((task) => task));
  // const asdfasdf = props.tasks.map((task) => {
  //   return (
  //     <Task>
  //       <input type="checkbox" name="" id="" />
  //       <TaskText>{task.task}</TaskText>
  //       <Close />
  //     </Task>
  //   );
  // });
  // console.log(typeof asdfasdf)

  const noTasks = (
    <EmptyMessageContainer>
      <EmptyMessageText>
        You have no items in your todo list. Create an item to begin tracking
        your list.
      </EmptyMessageText>
    </EmptyMessageContainer>
  );

  const clearHandler = () => {
    console.log("clearHandler");
  };

  const filterHandler = (e) => {
    setActiveFilter(e.target.id);
  };

  const dashboard = (
    <Dashboard>
      <ItemsLeft>{2 * 3} items left</ItemsLeft>
      <Filter>
        <FilterOption
          className={activeFilter === "all" ? "active" : null}
          onClick={filterHandler}
          id="all"
        >
          All
        </FilterOption>
        <FilterOption
          className={activeFilter === "active" ? "active" : null}
          onClick={filterHandler}
          id="active"
        >
          Active
        </FilterOption>
        <FilterOption
          className={activeFilter === "completed" ? "active" : null}
          onClick={filterHandler}
          id="completed"
        >
          Completed
        </FilterOption>
      </Filter>
      <ClearCompleted onClick={clearHandler}>Clear Completed</ClearCompleted>
    </Dashboard>
  );

  return (
    <DisplayRoot>
      {noTasks}
      {/* {Tasks} */}
      {dashboard}
    </DisplayRoot>
  );
};

export default Display;
