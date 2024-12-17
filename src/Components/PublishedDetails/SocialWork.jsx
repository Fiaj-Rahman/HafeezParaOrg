import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const SocialWork = () => {
  const [publishedDetails, setPublishedDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortCriteria, setSortCriteria] = useState("receiveMoney");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    const fetchPublishedDetails = async () => {
      try {
        const response = await axios.get("https://hafeez-para-server-site.vercel.app/publish");
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
    .filter((detail) =>
      detail.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aValue =
        sortCriteria === "receiveMoney" ? a.ReceiveMoney : a.CostMoney;
      const bValue =
        sortCriteria === "receiveMoney" ? b.ReceiveMoney : b.CostMoney;
      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    });

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error)
    return (
      <div className="text-red-600 text-xl">
        Error: {error}
        <button
          onClick={() => window.location.reload()}
          className="ml-4 p-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );

  const shareOnSocialMedia = (platform, title, url) => {
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);
    let shareUrl;

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank");
  };
  

  return (
    <div className={`m-10 ${
      theme === "light" ? "text-black" : "text-white"
    }`}>
    
      <div className="mb-10 w-3/4 text-center m-auto ">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className="border border-gray-300 rounded-md p-2 w-full" // Full width for search bar
        />
      </div>

      <div className="mb-5 text-center">
        <div className=" mb-4">
          <label htmlFor="sort-criteria" className="mr-2 text-lg font-semibold">
            Sort By:
          </label>
          <select
            id="sort-criteria"
            value={sortCriteria}
            onChange={handleSortCriteriaChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="receiveMoney">Receive Money</option>
            <option value="costMoney">Cost Money</option>
          </select>
        </div>
        <div className="ml-5">
          <label htmlFor="sort-order" className="mr-2 text-lg font-semibold">
            Price:
          </label>
          <select
            id="sort-order"
            value={sortOrder}
            onChange={handleSortOrderChange}
            className="border border-gray-300 rounded-md py-2 px-5"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {filteredAndSortedDetails.length === 0 ? (
        <p className="text-center text-xl text-white">
          No results found for "{searchQuery}".
        </p>
      ) : (
        <div className="flex flex-col space-y-6">
          {filteredAndSortedDetails.map((detail, index) => (
            <div
              key={detail.id}
              className={`${
                theme === "light" ? "bg-white" : "bg-black"
              } shadow-lg rounded-lg p-4 border border-gray-200 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {detail.image && (
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full md:w-1/4 h-auto object-cover rounded-md cursor-pointer mb-4 md:mb-0" // Full width on small devices, 1/4 on medium and larger
                  onClick={() => openModal(detail.image)}
                />
              )}
              <div className="flex-grow px-5">
                <h2 className="text-2xl font-bold mb-2 text-orange-600">
                  {detail.title}
                </h2>
                <p className={`text-gray-700 mb-2 text-justify ${
          theme === "light" ? "text-black" : "text-white"
        }`}>{detail.description}</p>
                <p className="font-semibold">
                  <strong>Receive Money:</strong> {detail.ReceiveMoney}
                </p>
                <p className="font-semibold">
                  <strong>Cost Money:</strong> {detail.CostMoney}
                </p>
                {detail.userName && (
                  <div className="flex items-center mt-4">
                    <img
                      src={detail.userImage}
                      alt={detail.userName}
                      className="w-10 h-10 rounded-full mr-3 border border-gray-300 shadow-sm"
                    />
                    <span className="text-xl font-semibold">
                      {detail.userName}
                    </span>
                  </div>
                )}
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() =>
                      shareOnSocialMedia(
                        "facebook",
                        detail.title,
                        window.location.href
                      )
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="w-6 h-6 text-blue-600"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 6.25 7.74V10.6H4.61V8.5h1.64V7.18c0-1.61.96-2.48 2.41-2.48.69 0 1.43.12 1.43.12v1.58h-.81c-.79 0-1.03.49-1.03 1.01v1.22h1.73l-.28 2.1h-1.45v5.14A8 8 0 0 0 8 0z" />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      shareOnSocialMedia(
                        "twitter",
                        detail.title,
                        window.location.href
                      )
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="w-6 h-6 text-blue-400"
                    >
                      <path d="M5.025 15c6.035 0 9.324-5 9.324-9.324 0-.143 0-.285-.01-.426A6.683 6.683 0 0 0 16 3.542a6.539 6.539 0 0 1-1.889.517 3.287 3.287 0 0 0 1.443-1.814 6.51 6.51 0 0 1-2.073.793A3.281 3.281 0 0 0 7.874 6.5a9.318 9.318 0 0 1-6.763-3.417 3.286 3.286 0 0 0 1.015 4.373A3.307 3.307 0 0 1 .64 7.036v.042A3.281 3.281 0 0 0 3.283 9.53a3.282 3.282 0 0 1-1.471.056 3.283 3.283 0 0 0 3.067 2.28A6.58 6.58 0 0 1 0 13.002a9.298 9.298 0 0 0 5.025 1.475z" />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      shareOnSocialMedia(
                        "linkedin",
                        detail.title,
                        window.location.href
                      )
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="w-6 h-6 text-blue-700"
                    >
                      <path d="M1.146 0A1.146 1.146 0 0 0 0 1.146v13.708A1.146 1.146 0 0 0 1.146 16h13.708A1.146 1.146 0 0 0 16 14.854V1.146A1.146 1.146 0 0 0 14.854 0H1.146zm3.978 14.353H2.785V6.59h2.339v7.763zM2.784 5.64A1.258 1.258 0 1 1 2.785 4.32a1.258 1.258 0 0 1 0 2.32zm12.375 8.713h-2.338v-4.082c0-.974-.348-1.634-1.224-1.634-.67 0-1.066.451-1.241.885-.063.15-.078.362-.078.574v4.257h-2.339s.031-6.902 0-7.623h2.339v1.08c.312-.476.873-1.154 2.114-1.154 1.54 0 2.694 1.008 2.694 3.174v4.523z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closeModal}
            >
              &times;
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
