import React, { useRef, useState, useContext, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Card, Input, Button, Typography, Alert } from "@material-tailwind/react";
import { AuthContext } from '../Providers/AuthProvider'; // Adjust the path to your AuthProvider
import { useTheme } from '../ThemeProvider/ThemeProvider';
// import { useTheme } from "../../ThemeProvider/ThemeProvider"; // Import the theme provider

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');

  // Accessing user from AuthContext
  const { user, loading } = useContext(AuthContext);
  const { theme } = useTheme(); // Get the current theme

  useEffect(() => {
    if (user && user.email) {
      setEmail(user.email); // Set the user's email if they are signed in
    }
  }, [user]);

  // Function to auto-dismiss alerts after a few seconds
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(null);
      }, 5000); // Auto-dismiss after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!form.current.from_name.value || !form.current.from_email.value || !form.current.message.value) {
      setError('Please fill in all fields.');
      return;
    }

    // Sending the email using EmailJS
    emailjs.sendForm('service_lmqa8j6', 'template_qezn1fj', form.current, '2fEALvABHngVxtJPU')
      .then(
        async () => {
          setSuccess(true);
          setError(null);

          // Prepare form data with user details
          const formData = {
            from_name: form.current.from_name.value,
            from_email: form.current.from_email.value,
            message: form.current.message.value,
            user_name: user?.displayName || 'Anonymous', // User's display name
            user_image: user?.photoURL || 'default-image-url', // User's photoURL
          };

          try {
            // Sending form data to your server
            const response = await fetch('https://hafeez-para-server-site.vercel.app/message', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log('Message and user details saved:', result);
          } catch (serverError) {
            console.error('Error saving message to the server:', serverError);
            setError('Failed to save message to the server');
          }
        },
        (emailError) => {
          setSuccess(false);
          setError(emailError.text);
        }
      );
  };

  return (
    <div className={`m-10 ${theme === "light" ? "bg-white" : "bg-gray-900"}`}>
      <div className='py-6'>
        <h1
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          className={`text-4xl font-serif font-bold text-center my-5 uppercase 
            ${theme === "light" ? "text-orange-900" : "text-white"}
            bg-gradient-to-r from-blue-700 via-black to-green-400 text-transparent bg-clip-text animate-gradient bg-300%`}
        >
          আপনার মতামত জানান
        </h1>
      </div>
      <Card color="transparent" shadow={false} className={`p-6 md:p-10 lg:w-3/5 xl:w-2/5 m-auto 
        ${theme === "light" ? "bg-gray-100" : "bg-gray-800"}`}>
        <form ref={form} onSubmit={sendEmail} className="mt-8 m-auto mb-2 w-full">
          <div className="mb-4 flex flex-col gap-6">
            <Typography variant="h6" color={theme === "light" ? "blue-gray" : "white"} className="mb-2">
            আপনার নাম
            </Typography>
            <Input
              size="lg"
              name="from_name"
              required
              placeholder="আপনার নাম"
              className={`!border-t-blue-gray-200 focus:!border-t-gray-900 transition duration-300 hover:shadow-lg hover:border-blue-400
                ${theme === "light" ? "bg-white text-black" : "bg-gray-700 text-white"}`}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              aria-label="Your name"
            />
            <Typography variant="h6" color={theme === "light" ? "blue-gray" : "white"} className="mb-2">
            আপনার ইমেইল
            </Typography>
            <Input
              size="lg"
              name="from_email"
              placeholder="name@mail.com"
              value={email}  // Pre-filling the email
              readOnly={!!email}  // Make the input read-only if email is filled
              className={`!border-t-blue-gray-200 focus:!border-t-gray-900 transition duration-300 hover:shadow-lg hover:border-blue-400
                ${theme === "light" ? "bg-white text-black" : "bg-gray-700 text-white"}`}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              aria-label="Your email"
            />
            <Typography variant="h6" color={theme === "light" ? "blue-gray" : "white"} className="mb-2">
            আপনার মতামত জানান
            </Typography>
            <Input
              type="text"
              name="message"
              size="lg"
              required
              placeholder="আপনার মতামত জানান..."
              className={`!border-t-blue-gray-200 focus:!border-t-gray-900 transition duration-300 hover:shadow-lg hover:border-blue-400
                ${theme === "light" ? "bg-white text-black" : "bg-gray-700 text-white"}`}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              aria-label="Your message"
            />
          </div>
          <Button 
            type="submit" 
            className={`mt-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white hover:shadow-xl 
              hover:from-blue-500 hover:to-purple-700 transition duration-300`} 
            fullWidth 
            disabled={!user || loading}  // Disable if no user or still loading
          >
            {loading ? "Loading..." : "ক্লিক করুন "}
          </Button>
        </form>
        {success && (
          <Alert color="green" className="mt-4">
           সফলতার সাথে আপনার বার্তা পাঠানো হয়েছে...
          </Alert>
        )}
        {error && (
          <Alert color="red" className="mt-4">
            {error}
          </Alert>
        )}
      </Card>
    </div>
  );
};

export default Contact;
