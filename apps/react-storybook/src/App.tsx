import { useEffect, useRef, useState } from "react";
import {
  SolarisPill,
  SolarisTab,
  SolarisTabPanel,
  SolarisTabs,
} from "solaris-react";

export default function App() {
  const tabRef = useRef<HTMLSolarisTabsElement>(null);
  const [selectedTab, setselectedTab] = useState("tab1");

  useEffect(() => {
    if (tabRef.current) {
      tabRef.current.addEventListener("tabSelected", (event) => {
        const customEvent = event as CustomEvent<string>;
        setselectedTab(customEvent.detail);
      });
    }
  }, []);

  return (
    <main style={{ padding: 16 }}>
      <SolarisTabs ref={tabRef}>
        <SolarisTab slot="tab" tab="tab1">
          <SolarisPill
            label="Envoyé"
            count={4}
            active={selectedTab === "tab1"}
          ></SolarisPill>
        </SolarisTab>
        <SolarisTab slot="tab" tab="tab2">
          <SolarisPill
            label="Envoyé"
            count={4}
            active={selectedTab === "tab2"}
          ></SolarisPill>
        </SolarisTab>
        <SolarisTab slot="tab" tab="tab3">
          <SolarisPill
            label="Envoyé"
            count={4}
            active={selectedTab === "tab3"}
          ></SolarisPill>
        </SolarisTab>
        <SolarisTabPanel
          active={selectedTab === "tab1"}
          slot="tab-panel"
          tab="tab1"
        >
          Content 1
        </SolarisTabPanel>
        <SolarisTabPanel
          active={selectedTab === "tab2"}
          slot="tab-panel"
          tab="tab2"
        >
          Content 2
        </SolarisTabPanel>
        <SolarisTabPanel
          active={selectedTab === "tab3"}
          slot="tab-panel"
          tab="tab3"
        >
          Content 3
        </SolarisTabPanel>
      </SolarisTabs>
    </main>
  );
}
