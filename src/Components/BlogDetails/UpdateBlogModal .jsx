import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateBlogModal = ({ blog, onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [receiveMoney, setReceiveMoney] = useState('');
    const [costMoney, setCostMoney] = useState('');

    useEffect(() => {
        if (blog) {
            setTitle(blog.title);
            setDescription(blog.description || '');
            setImage(blog.image);
            setReceiveMoney(blog.receiveMoney || '');
            setCostMoney(blog.costMoney || '');
        }
    }, [blog]);

    const handleUpdate = async () => {
        if (!title || !image || !description || !receiveMoney || !costMoney) {
            toast.error('All fields are required.');
            return;
        }

        try {
            await axios.put(`https://hafeez-para-server-site.vercel.app/publish/${blog._id}`, { 
                title, 
                description, 
                image, 
                receiveMoney, 
                costMoney 
            });
            toast.success('Blog updated successfully.');
            onClose();
        } catch (error) {
            toast.error('Failed to update blog.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-50"> {/* Increased z-index */}
            <div className="bg-white p-4 rounded shadow-md  z-50 max-w-3xl">
                <h2 className="text-xl font-bold mb-4">Update Blog</h2>
                <div className="mb-4">
                    <label className="block mb-1">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border text-justify px-10 py-5 w-full"
                        placeholder="Enter blog title"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border px-10 py-5 text-justify w-full"
                        placeholder="Enter blog description"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Image URL</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="border px-10 py-5 w-full"
                        placeholder="Enter image URL"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Receive Money</label>
                    <input
                        type="number"
                        value={receiveMoney}
                        onChange={(e) => setReceiveMoney(e.target.value)}
                        className="border px-10 py-5 w-full"
                        placeholder="Enter received money amount"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Cost Money</label>
                    <input
                        type="number"
                        value={costMoney}
                        onChange={(e) => setCostMoney(e.target.value)}
                        className="border px-10 py-5 w-full"
                        placeholder="Enter cost money amount"
                    />
                </div>
                <div className="flex justify-end">
                    <button onClick={onClose} className="mr-2 text-gray-600 hover:underline">Cancel</button>
                    <button onClick={handleUpdate} className="text-blue-600">Update</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlogModal;
