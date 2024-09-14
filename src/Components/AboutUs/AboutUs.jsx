import React from "react";
import Container from "../OtherComponents/Shared/Container/Container";
import teamImage from "../../../public/01.jpg"; // Example image for team
import missionImage from "../../../public/14.jpg"; // Example image for mission
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Icons for contact

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white -mt-10">
      <Container>
        {/* About Us Section */}
        <section className="py-12">
          <h1 className="text-5xl text-orange-900 font-serif font-bold text-center my-10 uppercase bg-gradient-to-r from-blue-700 via-white to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
            ABOUT US
          </h1>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            We are committed to positively impacting our community by offering
            essential services and support. Our team is passionate about
            delivering quality services that improve the lives of those we
            serve.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <img
                src={missionImage}
                alt="Our Mission"
                className="w-full h-52 object-cover rounded-lg mb-4 transform hover:scale-105 transition duration-500 ease-in-out"
              />
              <p className="text-gray-300">
                Our mission is to uplift our community through various programs
                and initiatives that promote education, health, and social
                welfare. We strive to create a supportive environment for all
                individuals.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Team</h3>
              <img
                src={teamImage}
                alt="Our Team"
                className="w-full h-52 object-cover rounded-lg mb-4 transform hover:scale-105 transition duration-500 ease-in-out"
              />
              <p className="text-gray-300">
                Our team consists of dedicated professionals committed to making
                a positive impact. Each member brings unique skills and
                experiences that contribute to our success.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Our Values</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
              <h3 className="text-xl font-semibold text-white mb-4">Integrity</h3>
              <p className="text-gray-300">
                We uphold the highest standards of integrity in all our actions.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
              <h3 className="text-xl font-semibold text-white mb-4">Community</h3>
              <p className="text-gray-300">
                We are committed to serving and improving our community.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
              <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in everything we do.
              </p>
            </div>
          </div>
        </section>

       {/* Contact Section */}
{/* Contact Section */}
<section className="py-12 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          
          {/* Location Card */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FaMapMarkerAlt className="text-4xl text-gray-600 mb-4" />
            <h4 className="font-bold text-lg">Location</h4>
            <p className="text-gray-600 text-center">
              HafeezPara, Chandrogona, Rangunia, Chittagong.
            </p>
          </div>

          {/* Phone Number Card */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FaPhoneAlt className="text-4xl text-gray-600 mb-4" />
            <h4 className="font-bold text-lg">Mobile Number</h4>
            <p className="text-gray-600 text-center">+880 1815-149024</p>
          </div>

          {/* Email Card */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FaEnvelope className="text-4xl text-gray-600 mb-4" />
            <h4 className="font-bold text-lg">Email</h4>
            <p className="text-gray-600 text-[14px] text-center">hafezparapublicwelfareorganization@gmail.com</p>
          </div>

        </div>
      </div>
    </section>


      </Container>
    </div>
  );
};

export default AboutUs;
