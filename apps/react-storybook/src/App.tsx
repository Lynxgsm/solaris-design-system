import {
  defineCustomElements,
  SolarisListTile,
  SolarisTypography,
} from "../../../packages/react-library";

defineCustomElements();

const App = () => {
  return (
    <SolarisListTile>
      <SolarisTypography fontFamily="montserrat">Hello World</SolarisTypography>
      <SolarisTypography slot="trailing">Font Family</SolarisTypography>
    </SolarisListTile>
  );
};

export default App;
