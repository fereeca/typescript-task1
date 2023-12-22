import { useState } from "react";
import Component1 from "../Component1/component1";
import Component2 from "../Component2/component2";
import "./index.css";

function Task1() {
  const [toggleState, setToggleState] = useState<boolean>(false);

  const toggleComponent = () => {
    setToggleState((prevState) => !prevState);
  };

  return (
    <div className="main">
      <div className="title-1">Task: Toggle Component visibility</div>
      <label className="switch">
        <input type="checkbox" id="toggleButton" onChange={toggleComponent} />
        <span className="slider"></span>
      </label>
      {toggleState ? <Component2 /> : <Component1 />}
    </div>
  );
}

export default Task1;
