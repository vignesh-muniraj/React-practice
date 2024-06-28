import React from "react";
import img from "../assets/react1.jpeg";
function Assets() {
  return (
    <div>
      <img src={img} alt="" />
      <img src={require("../assets/react2.jpeg")} alt="" />
    </div>
  );
}

export default Assets;
