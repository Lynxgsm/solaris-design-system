import {
  MyComponent,
  defineCustomElements,
} from "../../../packages/react-library";

defineCustomElements();

const App = () => {
  return <MyComponent first="Hello" last="World" />;
};

export default App;
