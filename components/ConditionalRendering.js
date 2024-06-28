import React from "react";

function ConditionalRendering() {
  const age = 18;
  return (
    <div>
      {age >= 18 && (
        <div>
          <h1>Eligible to Vote</h1>
        </div>
      )}
      <h1>Hi</h1>
    </div>
  );
}

export default ConditionalRendering;
