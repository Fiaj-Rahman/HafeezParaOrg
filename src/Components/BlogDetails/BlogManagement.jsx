import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import UpdateBlogModal from "./UpdateBlogModal ";
import { TbEdit, TbTrash, TbEye } from "react-icons/tb";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://hafeez-para-server-site.vercel.app/publish");
      
      // Filter blogs based on the logged-in user's email
      const userBlogs = response.data.filter(blog => blog.userEmail === user?.email);
      
      setBlogs(userBlogs);
    } catch (error) {
      toast.error("Failed to fetch blogs.");
    }
  }

  const handleUpdateClick = (blog) => {
    setSelectedBlog(blog);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedBlog(null);
    fetchBlogs();
  };

  const handleDeleteClick = (blog) => {
    setBlogToDelete(blog);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (blogToDelete) {
      try {
        await axios.delete(`https://hafeez-para-server-site.vercel.app/publish/${blogToDelete._id}`);
        toast.success("Blog deleted successfully.");

        // Refresh the blog list after successful deletion
        fetchBlogs();
      } catch (error) {
        toast.error("Failed to delete blog.");
      }
      // Close the confirmation modal
      setDeleteConfirmationOpen(false);
      setBlogToDelete(null);
    }
  };

  const handleViewClick = (blogId) => {
    navigate(`/activity/${blogId}`);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      
      <div className="mb-8 mt-5">
        <input
          type="text"
          placeholder="Search blogs by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 text-start">Image</th>
            <th className="py-2">Title</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {filteredBlogs.map((blog) => (
            <tr className="border border-white p-5" key={blog._id}>
              <td className="py-5 px-3">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td>{blog.title}</td>
              <td>
                <button
                  className="px-1"
                  onClick={() => handleUpdateClick(blog)}
                >
                  <TbEdit />
                </button>
                <button
                  className="px-1"
                  onClick={() => handleDeleteClick(blog)}
                >
                  <TbTrash />
                </button>
                <button
                  className="px-1"
                  onClick={() => handleViewClick(blog._id)}
                >
                  <TbEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <UpdateBlogModal blog={selectedBlog} onClose={handleModalClose} />
      )}

      {deleteConfirmationOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-md">
            <h2>Are you sure you want to delete this blog?</h2>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setDeleteConfirmationOpen(false)}
                className="mr-2"
              >
                Cancel
              </button>
              <button onClick={handleDeleteConfirm} className="text-red-600">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogManagement;
