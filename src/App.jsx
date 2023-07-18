import React, { useState } from "react";

const App = () => {
  const [result, setResult] = useState(0);

  const handleIncrement = () => {
    setResult((prevState) => (prevState += 1));
  };

  const handleDecrement = () => {
    setResult((prevState) => (prevState -= 1));
  };

  return (
    <div>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <div>Result: {result}</div>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default App;
