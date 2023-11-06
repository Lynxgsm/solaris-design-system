import { useEffect, useRef, useState } from "react";
import { SolarisAlert, SolarisTypography } from "solaris-react";

export default function App() {
  const [close, setClose] = useState(false);

  const ref = useRef<HTMLSolarisAlertElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("onCloseClick", () => {
        setClose(true);
      });
    }
  }, []);

  return (
    !close && (
      <SolarisAlert ref={ref} icon="arrow-up" bordered radius="md" closable>
        <SolarisTypography slot="title">This is title</SolarisTypography>
        <SolarisTypography color-scheme="darker">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </SolarisTypography>
      </SolarisAlert>
    )
  );
}
