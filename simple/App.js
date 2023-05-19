import React, { useState } from 'react'

function App() {

  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    console.log(name)
    setName("")
  }

  return (
    <div className="container">
      <p className="h2 my-3">User Form</p>
      <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
          <div className="form-text text-danger">Error message</div>
        </div>
        <button type="submit" className="btn btn-primary" disabled={(name.length === 0) ? true : false}>Submit</button>
      </form>
    </div>
  );
}

export default App;