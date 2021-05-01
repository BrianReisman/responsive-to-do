import { useState } from "react";
import { v4 as uuid } from "uuid";

import { Root, BackgroundImg, Container, Title } from "./GlobalElements";
import img from "./assets/images/bg__trees.png";
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";

const seedTasks = [{
      id: uuid(),
      task: "seed task",
      completed: false,
    },
    {
      id: uuid(),
      task: "seed task2**",
      completed: false,
    },]

    function App() {
  const [tasks, setTasks] = useState([...seedTasks]);
console.log(tasks.map(task => 3))

  return (
    <Root>
      <BackgroundImg src={img} alt="forest landscape background">
        <Container>
          <Title>TODO</Title>
          <Form setTasks={setTasks} tasks={tasks} />
          <Display setTasks={setTasks} tasks={tasks} />
        </Container>
      </BackgroundImg>
    </Root>
  );
}

export default App;
