import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <p className="lead my-3">You clicked {count} times</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;