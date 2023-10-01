import {
  defineCustomElements,
  SolarisButton,
} from "../../../packages/react-library";

defineCustomElements();

const App = () => {
  return <SolarisButton colorScheme="comet">Hello World</SolarisButton>;
};

export default App;
