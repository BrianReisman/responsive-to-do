import {
  DashboardRoot,
  ItemsLeft,
  Filter,
  FilterOption,
  ClearCompleted,
} from "./Dashboard.elements";

const Dashboard = ({ deleteCompleted, activeFilter, setActiveFilter }) => {

  const filterHandler = (e) => {
    setActiveFilter(e.target.id);
  };

  const clearHandler = () => {
    deleteCompleted();
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
