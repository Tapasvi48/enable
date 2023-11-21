import React, { useState } from 'react';
import './Table.css'; 

const UserTable = () => {

  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', dateCreated: '2023-01-01', role: 'Admin', status: 'online' },
    { id: 2, name: 'User 2', dateCreated: '2023-02-15', role: 'User', status: 'offline' },
    { id: 2, name: 'User 2', dateCreated: '2023-02-15', role: 'User', status: 'offline' },
    { id: 2, name: 'User 2', dateCreated: '2023-02-15', role: 'User', status: 'offline' },

  ]);

  const removeUser = (userId) => {

    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date Created</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.dateCreated}</td>
            <td>{user.role}</td>
            <td>
              <span
                className={`status-dot ${user.status === 'online' ? 'online' : 'offline'}`}
              ></span>
              {user.status === 'online' ? 'Online' : 'Offline'}
            </td>
            <td className="remove-user" onClick={() => removeUser(user.id)}>
              &#10006;
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
