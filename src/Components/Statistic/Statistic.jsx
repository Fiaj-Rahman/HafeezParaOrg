import React, { useState, useEffect } from 'react';
import './Statistic.css'; // Import the CSS file for styling
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Statistic = () => {
  const [userCount, setUserCount] = useState(0);
  const [adminCount, setAdminCount] = useState(0);
  const [regularUserCount, setRegularUserCount] = useState(0);

  useEffect(() => {
    const fetchUserCounts = async () => {
      try {
        // Fetch total users count
        const userResponse = await fetch('https://hafeez-para-server-site.vercel.app/googleUser/count');
        const userData = await userResponse.json();
        setUserCount(userData.totalUsers);

        // Fetch total admin count
        const adminResponse = await fetch('https://hafeez-para-server-site.vercel.app/googleUser/count/admin');
        const adminData = await adminResponse.json();
        setAdminCount(adminData.totalAdmins);

        // Fetch total regular user count
        const regularUserResponse = await fetch('https://hafeez-para-server-site.vercel.app/googleUser/count/user');
        const regularUserData = await regularUserResponse.json();
        setRegularUserCount(regularUserData.totalUsers);

      } catch (error) {
        console.error('Error fetching user counts:', error);
      }
    };

    fetchUserCounts();
  }, []);

  // Data for the bar chart
  const chartData = [
    { name: 'Total Visitors', count: userCount },
    { name: 'Total Admins', count: adminCount },
    { name: 'Total Users', count: regularUserCount },
  ];

  return (
    <div className="statistic-container z-60">
      {/* Total Users */}
      <div className="statistic-card">
        <h2>Total Visitors</h2>
        <p className="user-count">{userCount}</p>
      </div>

      {/* Total Admins */}
      <div className="statistic-card">
        <h2>Total Admins</h2>
        <p className="user-count">{adminCount}</p>
      </div>

      {/* Total Regular Users */}
      <div className="statistic-card">
        <h2>Total Users</h2>
        <p className="user-count">{regularUserCount}</p>
      </div>

      {/* Bar Chart */}
      <div style={{ width: '100%', height: 300, marginTop: '20px' }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3498db" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistic;
