import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <Child 
      name="xyz" 
      city="abc" />
    </div>
  );
}

export default Parent;
