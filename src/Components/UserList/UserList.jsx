import React, { useEffect, useState } from 'react';
import './UserList.css'; // Import the CSS file for styling

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]); // State to hold filtered users
  const [filter, setFilter] = useState('all'); // State to track the selected filter (all, admin, user)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://hafeez-para-server-site.vercel.app/googleUsers');
        const data = await response.json();
        setUsers(data);
        filterUsers(filter, data); // Call filterUsers initially to set filteredUsers
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); // Only run this effect once when the component mounts

  // Function to filter users based on role
  const filterUsers = (role, usersData = users) => {
    setFilter(role); // Update the selected filter
    if (role === 'all') {
      setFilteredUsers(usersData); // Show all users
    } else {
      setFilteredUsers(usersData.filter(user => user.role === role)); // Filter users by role
    }
  };

  // Handle select change
  const handleSelectChange = (e) => {
    const selectedRole = e.target.value;
    filterUsers(selectedRole);
  };

  return (
    <div className="user-list-container">
      <h1>All Users List</h1>

      {/* Select dropdown for filtering */}
      <div className="filter-select">
        <label htmlFor="role-filter">Filter by role: </label>
        <select id="role-filter" value={filter} onChange={handleSelectChange}>
          <option value="all">All</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      {/* Render the filtered users */}
      <div className="user-cards z-60 ">
        {filteredUsers.map(user => (
          <div key={user._id} className="user-card">
            <img src={user.photo} alt={user.name} className="user-photo" />
            <h2>{user.name}</h2>
            <p className="user-email">{user.email}</p>
            <p className="user-role">{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
