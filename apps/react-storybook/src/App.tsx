import {
  SolarisPill,
  SolarisTab,
  SolarisTabPanel,
  SolarisTabs,
} from "solaris-react";

export default function App() {
  return (
    <SolarisTabs>
      <SolarisTab slot="tab" tab="tab1">
        <SolarisPill label="Envoyé" count={4}></SolarisPill>
      </SolarisTab>
      <SolarisTab slot="tab" tab="tab2">
        <SolarisPill label="Envoyé" count={4}></SolarisPill>
      </SolarisTab>
      <SolarisTab slot="tab" tab="tab3">
        <SolarisPill label="Envoyé" count={4}></SolarisPill>
      </SolarisTab>
      <div>
        <SolarisTabPanel slot="tab-panel" tab="tab1" active>
          Content 1
        </SolarisTabPanel>
        <SolarisTabPanel slot="tab-panel" tab="tab2">
          Content 2
        </SolarisTabPanel>
        <SolarisTabPanel slot="tab-panel" tab="tab3">
          Content 3
        </SolarisTabPanel>
      </div>
    </SolarisTabs>
  );
}
