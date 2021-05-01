import { useState } from "react";
// import { v4 as uuid } from "uuid";

import { Root, BackgroundImg, Container, Title } from "./GlobalElements";
import img from "./assets/images/bg__trees.png";
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";

const seedTasks = [
  // {
  //   id: uuid(),
  //   task: "seed task",
  //   completed: false,
  // },
  // {
  //   id: uuid(),
  //   task: "seed task2**",
  //   completed: false,
  // },
];

function App() {
  const [tasks, setTasks] = useState([...seedTasks]);

  const toggleTaskCompleted = (e) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === e.target.id) {
        return { ...task, completed: !task.completed };
      } else return task;
    });
    setTasks(updatedTasks);
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
          />
        </Container>
      </BackgroundImg>
    </Root>
  );
}

export default App;
