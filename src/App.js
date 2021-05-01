import {
  Root,
  BackgroundImg,
  Container,
  Title,
  TextInput,
  Form, Label,
  Checkbox,
} from "./GlobalElements";
import img from "./assets/images/bg__trees.png";

function App() {
  const submitHandler = (e) => {
    alert("submit");
  };

  return (
    <Root>
      <BackgroundImg src={img} alt="forest landscape background">
        <Container>
          <Title>TODO</Title>
          <Form onSubmit={submitHandler}>
            {/* //TODO: add labels */}
            <Label htmlFor="checkbox">
              <Checkbox type="checkbox" id="checkbox" />
            </Label>
            <TextInput placeholder="Create a new item..." />
          </Form>
        </Container>
      </BackgroundImg>
    </Root>
  );
}

export default App;
