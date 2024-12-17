import React from "react";
import Container from "../OtherComponents/Shared/Container/Container";
import teamImage from "../../../public/01.jpg";
import missionImage from "../../../public/14.jpg";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import Card from "./Card"; // Adjust the import path as necessary

const AboutUs = () => {
  const { theme } = useTheme();

  return (
    <div className={theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"}>
      <Container>
        <section className="py-12">
          <h1 className={`text-5xl font-serif font-bold text-center my-10 uppercase ${theme === "light" ? "text-orange-900" : "text-white"} animate-gradient`}>
            ABOUT US
          </h1>
          <p className={`text-center mb-12 max-w-3xl mx-auto ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
            We are committed to positively impacting our community by offering essential services and support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Our Mission" image={missionImage} theme={theme}>
              Our mission is to uplift our community through various programs and initiatives that promote education, health, and social welfare.
            </Card>
            <Card title="Our Team" image={teamImage} theme={theme}>
              Our team consists of dedicated professionals committed to making a positive impact. Each member brings unique skills and experiences.
            </Card>
          </div>
        </section>

        <section className={`py-12 rounded-lg shadow-md ${theme === "light" ? "bg-gray-200" : "bg-gray-800"}`}>
          <h2 className={`text-3xl font-bold text-center mb-8 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
            Our Values
          </h2>
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
            <Card title="Integrity" theme={theme}>
              We uphold the highest standards of integrity in all our actions.
            </Card>
            <Card title="Community" theme={theme}>
              We are committed to serving and improving our community.
            </Card>
            <Card title="Excellence" theme={theme}>
              We strive for excellence in everything we do.
            </Card>
          </div>
        </section>

        <section className={`py-12 ${theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"}`}>
          <h2 className={`text-4xl font-bold text-center mb-10 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${theme === "light" ? "bg-white" : "bg-gray-800"}`}>
              <FaMapMarkerAlt className="text-4xl text-gray-600 mb-4" />
              <h4 className="font-bold text-lg">Location</h4>
              <p className={`text-gray-600 text-center ${theme === "light" ? "text-gray-700" : "text-white"}`}>
                HafeezPara, Chandrogona, Rangunia, Chittagong.
              </p>
            </div>

            <div className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${theme === "light" ? "bg-white" : "bg-gray-800"}`}>
              <FaPhoneAlt className="text-4xl text-gray-600 mb-4" />
              <h4 className="font-bold text-lg">Mobile Number</h4>
              <p className={`text-gray-600 text-center ${theme === "light" ? "text-gray-700" : "text-white"}`}>
                +880 1815-149024
              </p>
            </div>

            <div className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${theme === "light" ? "bg-white" : "bg-gray-800"}`}>
              <FaEnvelope className="text-4xl text-gray-600 mb-4" />
              <h4 className="font-bold text-lg">Email</h4>
              <p className={`text-gray-600 text-center ${theme === "light" ? "text-gray-700" : "text-white"}`}>
                hafejparajanakalyansonstha@gmail.com
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutUs;
