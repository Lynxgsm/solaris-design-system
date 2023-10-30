import { SolarisCard, SolarisTypography } from "solaris-react";

export default function App() {
  return (
    <main style={{ padding: 16 }}>
      <SolarisCard elevation={1} radius="sm">
        <SolarisTypography>Hello World</SolarisTypography>
      </SolarisCard>
    </main>
  );
}
