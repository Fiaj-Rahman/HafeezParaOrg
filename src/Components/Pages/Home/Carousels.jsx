import { useState, useEffect, useContext } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Carousels = () => {
  const { user } = useContext(AuthContext);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      image: "/01.jpg",
      title: "হাফেজপাড়া জনকল্যাণ সংস্থার পক্ষ থেকে আপনাকে স্বাগত",
      description:
        "হাফেজপাড়া জনকল্যাণ সংস্থা একটি সামাজিক ও অরাজনৈতিক সংগঠন, যা সমাজের সার্বিক উন্নয়নে নিবেদিত।",
    },
    {
      image: "/02.jpg",
      title: "হাফেজপাড়া জনকল্যাণ সংস্থার লক্ষ্য",
      description:
        "আমাদের লক্ষ্য একটি এমন সমাজ তৈরি করা যেখানে প্রতিটি মানুষ শান্তি ও শৃঙ্খলার সাথে বসবাস করতে পারে।",
    },
    {
      image: "/03.jpg",
      title: "হাফেজপাড়া জনকল্যাণ সংস্থার কার্যক্রম",
      description:
        "হাফেজপাড়া জনকল্যাণ সংস্থা শিক্ষা, স্বাস্থ্যসেবা, দারিদ্র্য বিমোচন, এবং সামাজিক সচেতনতা বৃদ্ধির মাধ্যমে সমাজের উন্নয়নে কাজ করে যাচ্ছে।",
    },
    {
      image: "/04.jpg",
      title: "আমাদের সাথে থাকুন",
      description:
        "আসুন, আমরা একসাথে সমাজকে আরও সুন্দর, সুশৃঙ্খল এবং বাসযোগ্য করে তুলি।",
    },
  ];

  return (
    <div className="h-screen -mt-3">
      <Carousel
        className="rounded-xl"
        activeIndex={activeIndex}
        onChange={(index) => setActiveIndex(index)}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-gradient-to-t from-black/90 to-transparent">
              <div className="text-center p-4 md:w-2/4 lg:w-1/3">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-4xl font-poppins font-semibold drop-shadow-lg"
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80 text-lg md:text-xl lg:text-xl font-open-sans drop-shadow-md"
                >
                  {slide.description}
                </Typography>
                {!user ? (
                  <div className="flex justify-center gap-4">
                    <Button
                      as={Link}
                      to="/login"
                      variant="gradient"
                      color="purple"
                    >
                      Login
                    </Button>
                    <Button
                      as={Link}
                      to="/signup"
                      variant="gradient"
                      color="teal"
                    >
                      Sign Up
                    </Button>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <Link
                      to="/bloodGrp"
                      className="px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                      Go to Blood Group Page
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
