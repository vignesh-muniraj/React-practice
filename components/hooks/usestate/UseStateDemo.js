import React, { useState } from "react";

function UseStateDemo() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={handleClick}> Clicked : {count}</button>
    </div>
  );
}

export default UseStateDemo;
