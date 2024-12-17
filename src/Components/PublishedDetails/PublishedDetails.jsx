import { Link, useNavigate } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";
import axios from "axios";
import toast from "react-hot-toast";
import { useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider"; // Import AuthContext

const PublishedDetails = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  // Access user context
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const ReceiveMoney = form.ReceiveMoney.value;
    const CostMoney = form.CostMoney.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    // https://hafeez-para-server-site.vercel.app/
    try {
      setLoading(true);
      // 1. Upload image and get image url
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData
      );
      const imageUrl = data.data.display_url;

      // 2. Save to server (backend), including user name and photo from AuthContext
      const usersheetValue = {
        title,
        description,
        ReceiveMoney,
        CostMoney,
        image: imageUrl,
        userName: user?.displayName || "Guest",  // Default to "Guest" if not logged in
        userEmail: user?.email || "defaultEmail@example.com",  // Default email
        userImage: user?.photoURL || "defaultImageURL", // Optional fallback
      };

      const response = await axios.post("https://hafeez-para-server-site.vercel.app/publish", usersheetValue);
      if (response.data.success) {
        toast.success("Published successfully");
        navigate("/deshbroad/blogManagement"); // Navigate to home after submission
      }
    } catch (err) {
      toast.error("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Publish Details</h1>
          <p className="text-sm text-gray-400">Enter your program details below</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block mb-2 text-sm">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter Title"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input required type="file" id="image" name="image" accept="image/*" />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 text-sm">
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                required
                placeholder="Enter Description"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="ReceiveMoney" className="text-sm mb-2">
                Total Receive Money
              </label>
              <input
                type="number"
                name="ReceiveMoney"
                id="ReceiveMoney"
                required
                placeholder="Enter Received Money"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="CostMoney" className="text-sm mb-2">
                Total Cost Money
              </label>
              <input
                type="number"
                name="CostMoney"
                id="CostMoney"
                required
                placeholder="Enter Cost Money"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>
          <div>
            <button
              disabled={loading}
              type="submit"
              className="bg-red-500 w-full rounded-md py-3 text-black font-bold"
            >
              {loading ? <TbFidgetSpinner className="animate-spin m-auto" /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PublishedDetails;
