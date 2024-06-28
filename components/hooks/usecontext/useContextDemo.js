import React, { useContext } from "react";
import myContext from "./contextProvider";

function UseContextDemo() {
  const data = useContext(myContext);
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}

export default UseContextDemo;
