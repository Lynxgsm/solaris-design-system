import { SolarisStatusText } from "solaris-react";

export default function App() {
  return (
    <main style={{ padding: 16 }}>
      <SolarisStatusText variant="p" type="success">
        {"Hello World"}
      </SolarisStatusText>
    </main>
  );
}
