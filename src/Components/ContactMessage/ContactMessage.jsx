import React, { useEffect, useState } from 'react';
import { Typography, Card } from "@material-tailwind/react";

const ContactMessage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('https://hafeez-para-server-site.vercel.app/messages');
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        const data = await response.json();

        // Sort messages by date (newest first)
        const sortedMessages = data.sort((a, b) => new Date(b.date) - new Date(a.date));

        setMessages(sortedMessages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // Format the date in a readable way
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full -mt-5 h-screen bg-white"> {/* Full screen container with white background */}
      <Typography className="text-4xl text-orange-900 font-serif font-bold text-center mb-2">
        Messages
      </Typography>
      {messages.length === 0 ? (
        <Typography>No messages found.</Typography>
      ) : (
        <Card className="overflow-x-auto w-full h-full bg-white"> {/* Full width and height, white background */}
          <table className="table-auto w-full h-full text-left bg-white"> {/* White background for table */}
            <thead>
              <tr className="border-b bg-white"> {/* White background for header */}
                <th className="px-4 ">No</th>
                <th className="px-4 ">Profile Picture</th>
                <th className="px-4 ">Name</th>
                <th className="px-4 ">Email</th>
                <th className="px-4 ">Message</th>
                
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr key={index} className="border-b bg-white"> {/* White background for each row */}
                  <td className="px-4">{index + 1}</td>
                  <td className="px-4">
                    <img
                      src={msg.user_image || 'default-image-url'}
                      alt="User"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="px-4">{msg.user_name || msg.from_name}</td>
                  <td className="px-4">{msg.from_email}</td>
                  <td className="px-4">{msg.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
};

export default ContactMessage;
