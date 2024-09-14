import React from 'react';
import "./ImageHome.css"

const SocialWorksHome = () => {
    return (
        <div className='imageHome'>
            {/* One */}
            <div className='OneImageHome'>
                <div className="grids ">
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/05.jpg"
                        alt="gallery-photo"
                    />
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center lg:mt-[100px]"
                        src="/02.jpg"
                        alt="gallery-photo"
                    />
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/06.jpg"
                        alt="gallery-photo"
                    />
                    
                </div>
            </div>

            {/* Two */}
            <div className='TwoImageHome'>
                <h1 className="text-lg font-bold text-white text-justify my-auto">
                "হাফেজপাড়া জনকল্যাণ সংস্থা" বিভিন্ন সমাজসেবা কার্যক্রমের মাধ্যমে সমাজের উন্নয়নে কাজ করছে। সংস্থাটি বর্নাত্র ফেনীর উদ্দেশ্যে ত্রাণ পাঠায়, এলাকায় রাস্তাঘাট আলোকিত করে এবং পরিষ্কার পরিচ্ছন্নতার দিকে নজর দেয়। আমাদের লক্ষ্য হলো স্থানীয় জনগণের নিরাপত্তা ও স্বাস্থ্য নিশ্চিত করা। আমাদের কার্যক্রম সম্পর্কে জানতে  ওয়েবসাইটের "একটিভিটিস" অংশে যান, যেখানে সাম্প্রতিক কার্যক্রম সম্পর্কে বিস্তারিত তথ্য পাওয়া যাবে।
                </h1>
            </div>
        </div>
    );
};

export default SocialWorksHome;
