import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => setUsers(response.data))
  })

  function mapUsersToList() {
    const userList = users.map((user, index) =>
      <li key={user.id} className="list-group-item">{user.username}</li>
    )
    return userList
  }

  return (
    <div className="container">
      <p className="h3 my-3">Fetching users from API using useEffect instead of componentDidMount()</p>
      <hr />
      <ul className="list-group">
        {mapUsersToList()}
      </ul>
    </div>
  );
}

export default App;