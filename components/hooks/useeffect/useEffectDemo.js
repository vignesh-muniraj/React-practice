import React, { useEffect } from "react";
import axios from "axios";
function UseEffectDemo() {
  const fetch = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(response.data);
  };
  useEffect(() => {
    fetch();
  }, []);
  return <></>;
}

export default UseEffectDemo;
