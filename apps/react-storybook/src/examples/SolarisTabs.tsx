import { useEffect, useRef, useState } from "react";
import {
  SolarisPill,
  SolarisTab,
  SolarisTabPanel,
  SolarisTabs,
} from "solaris-react";

const data = [
  {
    title: "Envoyés",
    items: [
      {
        title: "Title 1",
      },
      {
        title: "Title 2",
      },
      {
        title: "Title 3",
      },
    ],
  },
  {
    title: "Suspendu",
    items: [
      {
        title: "Title 1",
      },
    ],
  },
  {
    title: "En cours",
    items: [
      {
        title: "Title 1",
      },
      {
        title: "Title 2",
      },
    ],
  },
  {
    title: "Terminé",
    items: [],
  },
];

export default function ContractContent() {
  const [selectedTab, setSelectedTab] = useState("tab1");
  const ref = useRef<HTMLSolarisTabsElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("tabSelected", (event) => {
        const customEvent = event as CustomEvent<string>;
        setSelectedTab(customEvent.detail);
      });
    }
  }, []);

  return (
    <SolarisTabs ref={ref}>
      {data.map((item, index) => {
        return (
          <>
            <SolarisTab key={`tab${index}`} slot="tab" tab={`tab${index + 1}`}>
              <SolarisPill
                label={item.title}
                count={item.items.length}
                active={selectedTab === `tab${index + 1}`}
              ></SolarisPill>
            </SolarisTab>
            <SolarisTabPanel
              active={selectedTab === `tab${index + 1}`}
              slot="tab-panel"
              tab={`tab${index + 1}`}
            >
              {item.title === "Suspendu" && <p>Hello World</p>}
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum illum obcaecati earum aspernatur quisquam nemo. Omnis
                voluptate repellat harum repudiandae aliquam! Nostrum laborum
                neque esse nesciunt porro, optio obcaecati hic.
              </p>
            </SolarisTabPanel>
          </>
        );
      })}
    </SolarisTabs>
  );
}
