import React, { useRef, useState, useContext, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Card, Input, Button, Typography, Alert } from "@material-tailwind/react";
import { AuthContext } from '../Providers/AuthProvider';  // Adjust the path to your AuthProvider

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');

  // Accessing user from AuthContext
  const { user, loading } = useContext(AuthContext);

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
    <div className='m-10'>
      <div className='pt-6'>
        <h1
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          className="text-5xl text-orange-900 font-serif font-bold text-center my-5 uppercase bg-gradient-to-r from-blue-700 via-black to-green-400 text-transparent bg-clip-text animate-gradient bg-300%"
        >
          CONTACT ME
        </h1>
      </div>
      <Card color="transparent" shadow={false} className="p-6 md:p-10 lg:w-3/5 xl:w-2/5 m-auto">
        <form ref={form} onSubmit={sendEmail} className="mt-8 m-auto mb-2 w-full">
          <div className="mb-4 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Your Name
            </Typography>
            <Input
              size="lg"
              name="from_name"
              required
              placeholder="Your Name"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 transition duration-300 hover:shadow-lg hover:border-blue-400"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              aria-label="Your name"
            />
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Your Email
            </Typography>
            <Input
              size="lg"
              name="from_email"
              placeholder="name@mail.com"
              value={email}  // Pre-filling the email
              readOnly={!!email}  // Make the input read-only if email is filled
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 transition duration-300 hover:shadow-lg hover:border-blue-400"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              aria-label="Your email"
            />
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Message
            </Typography>
            <Input
              type="text"
              name="message"
              size="lg"
              required
              placeholder="Enter your message..."
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 transition duration-300 hover:shadow-lg hover:border-blue-400"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              aria-label="Your message"
            />
          </div>
          <Button 
            type="submit" 
            className="mt-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white hover:shadow-xl hover:from-blue-500 hover:to-purple-700 transition duration-300" 
            fullWidth 
            disabled={!user || loading}  // Disable if no user or still loading
          >
            {loading ? "Loading..." : "Send Message"}
          </Button>
        </form>
        {success && (
          <Alert color="green" className="mt-4">
            Success! Your message has been sent.
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
