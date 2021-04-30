import { Root, BackgroundImg } from "./GlobalElements";
import img from "./assets/images/bg__trees.png";

function App() {
  return (
    <Root>
      <BackgroundImg src={img} alt="forest landscape background" />
    </Root>
  );
}

export default App;
