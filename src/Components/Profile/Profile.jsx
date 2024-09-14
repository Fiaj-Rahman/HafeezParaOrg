import React, { useEffect, useState } from 'react';
import useRole from '../Hooks/useRole';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import avatarImg from "../../../public/logo.png"; // Default avatar if no photoURL

const Profile = () => {
    const { user, loading: authLoading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [googleRole, googleLoading] = useRole();
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (!authLoading && user?.email) {
                try {
                    const response = await axiosSecure(`/googleUsers/${user.email}`);
                    setProfileData(response.data);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchUserData();
    }, [authLoading, user, axiosSecure]);

    if (authLoading || googleLoading) {
        return <p className="text-center">Loading...</p>; // Show loading message while fetching
    }

    if (!profileData) {
        return <p className="text-center">No profile data available.</p>; // Show message if no data
    }

    return (
        <div className="flex flex-col -mt-10 items-center p-8 bg-gray-100 min-h-screen">
            {/* Profile Card */}
            <div className="bg-white mt-10 shadow-xl rounded-lg max-w-md w-full p-6 text-center transform transition-all hover:shadow-2xl">
                {/* Profile Image */}
                <img
                    className="w-32 h-32 mx-auto rounded-full shadow-lg border-4 border-gray-200 mb-4"
                    src={profileData.photo || avatarImg} // Use user's photo or default avatar
                    alt={profileData.name || "User Avatar"}
                />

                {/* User Name */}
                <h1 className="text-2xl font-semibold mt-2 text-gray-800">
                    {profileData.name || "User Name"}
                </h1>

                {/* User Email */}
                <p className="text-gray-600 mt-2">{profileData.email || "user@example.com"}</p>

                {/* Role */}
                <p
                    className={`mt-2 text-sm py-1 px-3 rounded-full ${
                        googleRole === "admin"
                            ? "bg-green-500 text-white"
                            : "bg-blue-500 text-white"
                    }`}
                >
                    {googleRole || "User"}
                </p>

                {/* User ID */}
                <p className="text-gray-600 mt-4">
                    <span className="font-semibold">User ID:</span> {profileData._id}
                </p>
            </div>
        </div>
    );
};

export default Profile;
