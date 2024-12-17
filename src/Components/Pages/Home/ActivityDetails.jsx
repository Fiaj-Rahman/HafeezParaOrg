import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaTwitter, FaFacebookF, FaShareAlt } from 'react-icons/fa'; // Import social icons

const ActivityDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivityDetails = async () => {
      try {
        const response = await axios.get(`https://hafeez-para-server-site.vercel.app/publish/${id}`);
        setActivity(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivityDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">Error: {error}</div>;
  if (!activity) return <div>No activity found.</div>;

  const shareUrl = `https://yourwebsite.com/activity/${id}`;
  const shareText = `Check out this activity: ${activity.title}`;

  return (
    <section className="bg-white -mt-4 dark:bg-gray-800 dark:text-gray-200">
      <div className="container mx-auto p-6">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-4 text-blue-600 hover:underline focus:outline-none"
        >
          &larr; Back
        </button>
        <div className="flex flex-col lg:flex-row bg-gray-100 rounded-lg shadow-md overflow-hidden">
          {activity.image && (
            <img
              src={activity.image}
              alt={activity.title}
              className="object-cover w-full h-48 rounded sm:h-64 lg:h-64 my-auto lg:w-1/2" // Adjusted height
            />
          )}
          <div className="p-6 flex flex-col justify-between lg:w-1/2">
            <div>
              <h3 className="text-3xl font-bold sm:text-4xl">{activity.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{activity.description}</p>
              <div className="flex items-center mt-4">
                {activity.userImage && (
                  <img 
                    src={activity.userImage} 
                    alt={activity.userName} 
                    className="w-12 h-12 rounded-full mr-3"
                  />
                )}
                <h3 className="text-md font-medium">{activity.userName || "Unknown"}</h3>
              </div>
              
              {/* Displaying ReceiveMoney and CostMoney */}
              <div className="mt-4">
                <p className="text-lg font-semibold">Receive Money: <span className="font-normal">{activity.ReceiveMoney || 'N/A'}</span></p>
                <p className="text-lg font-semibold">Cost Money: <span className="font-normal">{activity.CostMoney || 'N/A'}</span></p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Share this activity:</h3>
              <div className="flex space-x-4 mt-2">
                <a 
                  href={`https://twitter.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-700"
                >
                  <FaTwitter className="mr-1" />
                  Twitter
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <FaFacebookF className="mr-1" />
                  Facebook
                </a>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-700 hover:text-blue-900"
                >
                  <FaShareAlt className="mr-1" />
                  Share
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityDetails;
