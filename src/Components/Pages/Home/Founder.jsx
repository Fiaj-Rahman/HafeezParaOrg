import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Founder.css';
import useAuth from "../../Hooks/useAuth"; // Adjust the import path as necessary
import { useTheme } from "../../ThemeProvider/ThemeProvider"; // Adjust the import path as necessary

const founders = [
    { id: 1, imgSrc: './founder05.png', alt: 'Founder 1' },
    { id: 2, imgSrc: './founder01.png', alt: 'Founder 2' },
    { id: 3, imgSrc: './founder04.png', alt: 'Founder 3' },
    { id: 4, imgSrc: './founder07.png', alt: 'Founder 4' },
    { id: 5, imgSrc: './founder06.png', alt: 'Founder 5' },
    { id: 6, imgSrc: './founder08.png', alt: 'Founder 6' },
    { id: 7, imgSrc: './founder02.png', alt: 'Founder 7' },
    { id: 8, imgSrc: './founder03.png', alt: 'Founder 8' },
];

const Founder = () => {
    const { theme } = useTheme(); // Get current theme
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulating a fetch function, if needed
        setLoading(false);
    }, []);

    if (loading) return <div className="text-center text-xl">Loading...</div>;
    if (error) return <div className="text-red-600 text-xl">Error: {error}</div>;

    return (
        <div className={`container  p-4`}>
            <h1
        className={`text-3xl sm:text-4xl md:text-4xl font-serif font-bold text-center my-10 uppercase ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        প্রতিষ্ঠাতা সদস্য
      </h1>
            <Swiper
                grabCursor={true}
                loop={true}
                slidesPerView={4}
                spaceBetween={10}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="swiper_container"
            >
                {founders.map(founder => (
                    <SwiperSlide key={founder.id}>
                        <img 
                            src={founder.imgSrc} 
                            alt={founder.alt} 
                            className={`rounded-lg `} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Founder;
