import {
  defineCustomElements,
  SolarisRow,
  SolarisButton,
} from "../../../packages/react-library";

defineCustomElements();

const App = () => {
  return (
    <SolarisRow>
      <SolarisButton size="md" colorScheme="nebula-blue">
        Hello World
      </SolarisButton>
    </SolarisRow>
  );
};

export default App;
