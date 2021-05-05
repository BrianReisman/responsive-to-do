import { FilterOption, Filter } from "../Dashboard.elements";

const FilterComponent = ({ activeFilter, filterHandler }) => {
  return (
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
};

export default FilterComponent;
