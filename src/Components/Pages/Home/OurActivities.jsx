import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaFacebook, FaTwitter, FaLinkedin, FaShareAlt } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const OurActivities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { theme } = useTheme();

  const isLoggedIn = !!user;

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get("https://hafeez-para-server-site.vercel.app/publish");
        setActivities(response.data.slice(0, 3)); // Adjust slice as necessary
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  const handleSeeMoreClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/socialWork");
    }
  };

  const handleReadMoreClick = (activity) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate(`/activity/${activity._id}`); // Ensure you're using the correct ID format
    }
  };

  const handleShare = (activity) => {
    const url = `https://example.com/activity/${activity._id}`;
    const text = `Check out this activity: ${activity.title}`;
    const shareOptions = [
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    ];

    window.open(shareOptions[0], "_blank");
  };

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-red-600 text-xl">Error: {error}</div>;

  return (
    <div className="m-10">
      <h1 className={`text-3xl sm:text-4xl md:text-4xl font-serif font-bold text-center my-10 uppercase ${theme === "light" ? "text-black" : "text-white"}`}>
        আমাদের কার্যক্রম
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div key={activity._id} className={`max-w-md p-6 overflow-hidden rounded-lg shadow ${theme === "light" ? "bg-gray-200 text-gray-800" : "bg-gray-900 text-white"}`}>
            <article>
              <h2 className={`text-xl font-bold overflow-hidden overflow-ellipsis whitespace-nowrap ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                {activity.title}
              </h2>
              <p className={`mt-2 text-justify ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                {activity.description.length > 100 ? `${activity.description.slice(0, 100)}...` : activity.description}
              </p>
              <button onClick={() => handleReadMoreClick(activity)} className="mt-2 text-blue-500 hover:underline">
                Read More
              </button>
              <div className="flex items-center mt-4">
                {/* <img 
                  src={activity.photo ? activity.photo : "https://source.unsplash.com/100x100/?portrait"} 
                  alt={activity.userName || "User"} 
                  className="w-10 h-10 rounded-full bg-gray-500" 
                /> */}
                <div className="ml-3">
                  <h3 className={`text-sm font-medium ${theme === "light" ? "text-black" : "text-white"}`}>
                    {activity.userName || "User"}
                  </h3>
                </div>
              </div>
            </article>
            <div className="flex justify-between mt-4 items-center">
              <button onClick={() => handleShare(activity)} className="text-gray-300 hover:text-yellow-300 transition duration-300">
                <FaShareAlt />
              </button>
              <div className="flex space-x-2">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=https://example.com/activity/${activity._id}`} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-blue-500 hover:text-blue-600 transition duration-300" />
                </a>
                <a href={`https://twitter.com/intent/tweet?text=Check this out!&url=https://example.com/activity/${activity._id}`} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-blue-400 hover:text-blue-500 transition duration-300" />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://example.com/activity/${activity._id}`} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-700 hover:text-blue-800 transition duration-300" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!isLoggedIn && (
        <div className="flex justify-center mt-10">
          <button onClick={handleSeeMoreClick} className="p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default OurActivities;
