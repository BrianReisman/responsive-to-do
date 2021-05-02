import {FilterOption, Filter} from '../Dashboard.elements'

const FilterComponent = (props) => {
  return(
      <Filter>
        <FilterOption
          className={props.activeFilter === "all" ? "active" : null}
          onClick={props.filterHandler}
          id="all"
        >
          All
        </FilterOption>
        <FilterOption
          className={props.activeFilter === "active" ? "active" : null}
          onClick={props.filterHandler}
          id="active"
        >
          Active
        </FilterOption>
        <FilterOption
          className={props.activeFilter === "completed" ? "active" : null}
          onClick={props.filterHandler}
          id="completed"
        >
          Completed
        </FilterOption>
      </Filter>
  )
};

export default FilterComponent;
