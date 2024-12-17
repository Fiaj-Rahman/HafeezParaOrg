import React, { useEffect, useState } from 'react';
import './UserList.css'; // Import the CSS file for styling

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]); 
  const [filter, setFilter] = useState('all'); 
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://hafeez-para-server-site.vercel.app/googleUsers');
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data); 
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); 

  const filterUsers = (role, search = '') => {
    const filteredByRole = role === 'all' ? users : users.filter(user => user.role === role);
    
    const finalFilteredUsers = filteredByRole.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredUsers(finalFilteredUsers);
  };

  const handleSelectChange = (e) => {
    const selectedRole = e.target.value;
    setFilter(selectedRole); 
    filterUsers(selectedRole, searchTerm);
  };

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    filterUsers(filter, newSearchTerm);
  };

  return (
    <div className="user-list-container p-4">
      <h1 className="text-2xl font-bold mb-4">All Users List</h1>

      <div className="filter-select mb-4">
        <label htmlFor="role-filter" className="mr-2">Filter by role: </label>
        <select id="role-filter" value={filter} onChange={handleSelectChange} className="border border-blue-300 rounded p-2">
          <option value="all">All</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-blue-300 rounded p-2 w-full"
        />
      </div>

      <div className="user-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map(user => (
          <div key={user._id} className="user-card border rounded-lg p-4 shadow-lg">
            <img src={user.photo} alt={user.name} className="user-photo rounded-full w-16 h-16 mb-2" />
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="user-email text-gray-600">{user.email}</p>
            <p className="user-role text-gray-500 ">{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
