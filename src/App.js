import { useState, useEffect } from "react";

import { Root, BackgroundImg, Container, Title } from "./GlobalElements";
import img from "./assets/images/bg__trees.png";
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasksFromLocalStorage);
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
          />
        </Container>
      </BackgroundImg>
    </Root>
  );
}

export default App;
