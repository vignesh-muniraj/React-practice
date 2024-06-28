import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/skill");
  };
  return (
    <div>
      <h1>This is About</h1>
      <button onClick={handleClick}>Click to Navigate</button>
    </div>
  );
}

export default About;
