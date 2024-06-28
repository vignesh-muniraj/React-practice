import React, { useState } from "react";

const FormDemo = () => {
  const [formData, setFormData] = useState({
    name: "", // Set initial value to empty string
    password: "", // Set initial value to empty string
  });

  const handleEvent = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div>
      <input
        type="text"
        id="name"
        onChange={handleEvent}
        value={formData.name}
      />
      <p style={{ marginBottom: "20px" }}></p>
      <input
        type="password"
        id="password"
        onChange={handleEvent}
        value={formData.password}
      />
    </div>
  );
};

export default FormDemo;
