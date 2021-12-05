import { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import "./configMenu.css";

const ConfigMenu = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        className={active ? "config__wrapper" : "config__wrapper--disabled"}
      ></div>
      <CgMenuLeftAlt
        className="config__icon"
        onClick={() => setActive((value) => !value)}
      />
    </>
  );
};
export { ConfigMenu };
