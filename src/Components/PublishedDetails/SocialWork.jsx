import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SocialWork = () => {
  const [publishedDetails, setPublishedDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortCriteria, setSortCriteria] = useState('receiveMoney');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    const fetchPublishedDetails = async () => {
      try {
        const response = await axios.get('https://hafeez-para-server-site.vercel.app/publish');
        setPublishedDetails(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPublishedDetails();
  }, []);

  const handleSortCriteriaChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const filteredAndSortedDetails = [...publishedDetails]
    .filter(detail => detail.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      const aValue = sortCriteria === 'receiveMoney' ? a.ReceiveMoney : a.CostMoney;
      const bValue = sortCriteria === 'receiveMoney' ? b.ReceiveMoney : b.CostMoney;
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return (
    <div className="text-red-600 text-xl">
      Error: {error}
      <button onClick={() => window.location.reload()} className="ml-4 p-2 bg-blue-500 text-white rounded">Retry</button>
    </div>
  );

  return (
    <div className="m-10">
                  <h1 className="text-5xl text-orange-900 font-serif font-bold text-center my-10 uppercase bg-gradient-to-r from-blue-700 via-white to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">OUR ACITIVITES</h1>

      <div className="mb-5 text-center">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className="border border-gray-300 rounded-md p-2 w-1/2"
        />
      </div>
      
      {/* Updated Sort and Order Section */}
      <div className="mb-5 text-center">
        <div className="mb-2">
          <label htmlFor="sort-criteria" className="mr-2 text-lg font-semibold">Sort By:</label>
          <select id="sort-criteria" value={sortCriteria} onChange={handleSortCriteriaChange} className="border border-gray-300 rounded-md p-2">
            <option value="receiveMoney">Receive Money</option>
            <option value="costMoney">Cost Money</option>
          </select>
        </div>
        <div>
          <label htmlFor="sort-order" className="mr-2 text-lg font-semibold">Order:</label>
          <select id="sort-order" value={sortOrder} onChange={handleSortOrderChange} className="border border-gray-300 rounded-md p-2">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {filteredAndSortedDetails.length === 0 ? (
        <p className="text-center text-xl text-white">No results found for "{searchQuery}".</p>
      ) : (
        <div className="flex flex-col space-y-6">
          {filteredAndSortedDetails.map((detail) => (
            <div key={detail.id} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-200 flex flex-col lg:flex-row">
              {detail.image && (
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-32 object-cover rounded-md cursor-pointer mb-4 lg:mb-0 lg:w-32 lg:h-32 lg:mr-4"
                  onClick={() => openModal(detail.image)}
                />
              )}
              <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-2 text-orange-600">{detail.title}</h2>
                <p className="text-gray-700 mb-2">{detail.description}</p>
                <p className="font-semibold"><strong>Receive Money:</strong> {detail.ReceiveMoney}</p>
                <p className="font-semibold"><strong>Cost Money:</strong> {detail.CostMoney}</p>
                {detail.userName && (
                  <div className="flex items-center mt-4">
                    <img
                      src={detail.userImage}
                      alt={detail.userName}
                      className="w-10 h-10 rounded-full mr-3 border border-gray-300 shadow-sm"
                    />
                    <span className="text-xl font-semibold">{detail.userName}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for displaying the image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closeModal}
            >
              &times; {/* Close button */}
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialWork;
