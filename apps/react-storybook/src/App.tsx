import {
  defineCustomElements,
  SolarisButton,
  SolarisRow,
} from "../../../packages/react-library";

defineCustomElements();

const App = () => {
  return (
    <SolarisRow gap={10}>
      <SolarisButton colorScheme="comet">Hello World</SolarisButton>
      <SolarisButton colorScheme="comet">Hello World</SolarisButton>
      <SolarisButton colorScheme="comet">Hello World</SolarisButton>
    </SolarisRow>
  );
};

export default App;
