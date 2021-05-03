import { DashboardRoot, ItemsLeft, ClearCompleted } from "./Dashboard.elements";
import FilterComponent from "./Filter/Filter";

const Dashboard = ({
  deleteCompleted,
  activeFilter,
  itemsLeft,
  filterHandler,
}) => {
  const clearHandler = () => {
    deleteCompleted();
  };

  return (
    <DashboardRoot>
      <ItemsLeft>
        {itemsLeft.length || 0} {itemsLeft.length === 1 ? "item" : "items"} left
      </ItemsLeft>

      <div className="filter">
        <FilterComponent
          filterHandler={filterHandler}
          activeFilter={activeFilter}
        />
      </div>

      <ClearCompleted onClick={clearHandler}>Clear Completed</ClearCompleted>
    </DashboardRoot>
  );
};

export default Dashboard;
