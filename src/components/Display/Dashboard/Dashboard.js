import {
  DashboardRoot,
  ItemsLeft,
  Filter,
  FilterOption,
  ClearCompleted,
  Main,
  MobileFilter,
} from "./Dashboard.elements";

const Dashboard = ({
  deleteCompleted,
  activeFilter,
  setActiveFilter,
  itemsLeft,
}) => {
  const filterHandler = (e) => {
    setActiveFilter(e.target.id);
  };

  const clearHandler = () => {
    deleteCompleted();
  };

  const filter = (
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
  );

  return (
    <DashboardRoot>
      <Main>
        <ItemsLeft>{itemsLeft.length || 0} items left</ItemsLeft>
        {filter}
        <ClearCompleted onClick={clearHandler}>Clear Completed</ClearCompleted>
      </Main>
      <MobileFilter>test</MobileFilter>
    </DashboardRoot>
  );
};

export default Dashboard;
