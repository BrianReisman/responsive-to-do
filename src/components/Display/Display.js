import {
  DisplayRoot,
  EmptyMessageText,
  EmptyMessageContainer,
} from "./Display.elements";
import Dashboard from "./Dashboard/Dashboard";
import Task from "./Task/Task";

const Display = ({
  tasks,
  toggleTaskCompleted,
  deleteTask,
  deleteCompleted,
  filterHandler,
  activeFilter,
  setActiveFilter,
}) => {
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
      <Task
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        toggleTaskCompleted={toggleTaskCompleted}
      />
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

      {tasks.length === 0 ? null : RenderedTasks}

      {tasks.length === 0 ? null : (
        <Dashboard
          deleteCompleted={deleteCompleted}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          itemsLeft={onlyActiveTasks}
          filterHandler={filterHandler}
        />
      )}
    </DisplayRoot>
  );
};

export default Display;
