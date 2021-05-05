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
  // Filter through all tasks and return only those undone
  const onlyActiveTasks = tasks.filter((task) => !task.completed);
  // Filter through all tasks and return only those completed
  const onlyCompletedTasks = tasks.filter((task) => task.completed);

  // Based on the value of activeFilter, render either, all tasks passed in or those in onlyActiveTasks or onlyCompletedTasks
  const TasksToRender =
    activeFilter === "all"
      ? tasks
      : activeFilter === "active"
      ? onlyActiveTasks
      : onlyCompletedTasks;

  // For every tasks, return one <Task/> component
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
      {/* If there are no tasks, render this message */}
      {tasks.length === 0 ? noTasks : null}

      {/* If there are tasks, render those tasks */}
      {tasks.length === 0 ? null : RenderedTasks}

      {/* If there are tasks include Dashboard */}
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
