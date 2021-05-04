import { useState, useEffect } from "react";

import { Root, BackgroundImg, Container, Title } from "./GlobalElements";
import img from "./assets/images/bg__trees.png";
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";
import FilterComponent from "./components/Display/Dashboard/Filter/Filter";
import { MobileFilter } from "./components/Display/Dashboard/Dashboard.elements";

function App() {
  const [tasks, setTasks] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const filterHandler = (e) => {
    setActiveFilter(e.target.id);
  };

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    if (!tasksFromLocalStorage) {
      setTasks([])
    } else {
      setTasks(tasksFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTaskCompleted = (e) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === e.target.id) {
        return { ...task, completed: !task.completed };
      } else return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (e) => {
    const updatedTasks = [];

    tasks.forEach((task) => {
      if (task.id === e.target.id) updatedTasks.push();
      else updatedTasks.push(task);
    });

    setTasks(updatedTasks);
  };

  const deleteCompleted = () => {
    const tasksStillUndone = [...tasks].filter((task) => !task.completed);
    setTasks(tasksStillUndone);
  };

  return (
    <Root>
      <BackgroundImg src={img} alt="forest landscape background">
        <Container>
          <Title>TODO</Title>
          <Form setTasks={setTasks} tasks={tasks} />
          <Display
            setTasks={setTasks}
            tasks={tasks}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            deleteCompleted={deleteCompleted}
            filterHandler={filterHandler}
            activeFilter={activeFilter}
          />
          {tasks.length === 0 ? null : (
            <MobileFilter>
              <FilterComponent
                filterHandler={filterHandler}
                activeFilter={activeFilter}
              />
            </MobileFilter>
          )}
        </Container>
      </BackgroundImg>
    </Root>
  );
}

export default App;
