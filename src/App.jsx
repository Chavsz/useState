import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}> Click </button>
      <h1> {count} </h1>
    </div>
  );
};

export default App;
