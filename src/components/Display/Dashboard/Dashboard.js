import {
  DashboardRoot,
  ItemsLeft,
  Filter,
  FilterOption,
  ClearCompleted,
} from "./Dashboard.elements";
import { useState } from "react";

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filterHandler = (e) => {
    setActiveFilter(e.target.id);
  };

  const clearHandler = () => {
    console.log("clearHandler");
  };
  return (
    <DashboardRoot>
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
    </DashboardRoot>
  );
};

export default Dashboard;
