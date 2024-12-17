// components/Card.js
import React from 'react';

const Card = ({ title, image, children, theme }) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${theme === "light" ? "bg-white text-gray-800" : "bg-gray-800 text-gray-200"}`}>
      {image && <img src={image} alt={title} className="w-full h-52 object-cover rounded-lg mb-4" />}
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default Card;
