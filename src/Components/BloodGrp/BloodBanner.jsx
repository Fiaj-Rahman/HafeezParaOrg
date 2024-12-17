import React from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { FaVideo, FaHandHoldingHeart, FaHeartbeat } from "react-icons/fa";

const BloodBanner = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-10 ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-100 text-gray-700"
      }`}
    >
      {/* Video & Image Section */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-auto flex justify-center items-center">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex items-center justify-center">
          <FaVideo className="text-6xl text-white" />
        </div>
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/U-F_Juh4AIU?si=aTPXM9LH2uvkhFFV"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-red-600">
          আপনার রক্ত দিন আমাদের
        </h2>
        <p className="text-lg md:text-xl">
          একসাথে আরও অনেক জীবন বাঁচানোর অঙ্গীকার করুন। আপনার রক্তদানের মাধ্যমে কেউ নতুন জীবন পেতে পারে।
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
          রক্তদান করুন আজই
        </button>
      </div>

      {/* Additional Content Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Life Saved */}
        <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
          <FaHandHoldingHeart className="text-red-500 text-5xl mb-3" />
          <h3 className="text-2xl font-bold text-gray-700">৩০+</h3>
          <p className="text-gray-600">জীবন বাঁচানো হয়েছে</p>
        </div>

        {/* Donations Made */}
        <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
          <FaHeartbeat className="text-red-500 text-5xl mb-3" />
          <h3 className="text-2xl font-bold text-gray-700"> ৪০+</h3>
          <p className="text-gray-600">সফল রক্তদান</p>
        </div>

        
      </div>

      {/* Inspirational Quote */}
      <div className="w-full text-center mt-8 md:mt-12">
        <blockquote className="text-xl italic font-semibold text-gray-600">
          "রক্তদান জীবনদান - আপনার একটি রক্তের ফোঁটা একটি জীবন বাঁচাতে পারে।"
        </blockquote>
      </div>
    </div>
  );
};

export default BloodBanner;
