import React from "react";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const Map = () => {
  const { theme } = useTheme();
  return (
    <div>
      <div className={`hero ${theme === "light" ? "text-black" : "text-white"}`}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d690.092158759271!2d92.1266102138026!3d22.470678611695533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad36364736a591%3A0x5be79c0c74e3c035!2sHafez%20Para%20Mosque!5e1!3m2!1sen!2sbd!4v1725702942710!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div>
            <p className={`py-6  text-justify px-5  ${theme === "light" ? "text-black" : "text-white"}`}>
              হাফেজপাড়া জনকল্যাণ সংস্থাটি মূলত একটি সমাজের মান উন্নয়ন ও সমাজ
              সংস্করণের জন্য প্রতিষ্ঠিত করা হয়। এই সংগঠনটির প্রতিষ্ঠা করার সময়
              মূল লক্ষ্য ছিল হাফেজপাড়ার জনগণ যেন সুন্দর ও সুশৃংখল পরিবেশের
              মধ্যে বসবাস করতে পারে। এই সংগঠনটি মূলত প্রতিষ্ঠিত করা হয় হাফেজ
              পাড়াকে কেন্দ্র করে। যদিও এর কার্যক্রম গুলো সকল জনগণের পাশে
              দাঁড়ানোর জন্য সংগঠিত হয়ে। হাফেজপাড়া জনকল্যাণ সংস্থা সংগঠনটি
              অবস্থান করে চট্টগ্রামের রাঙ্গুনিয়া উপজেলাতে। <br />গ্রাম :
              হাফেজপাড়া, চন্দ্রঘোনা <br /> ইউনিয়ন : কদমতলি <br />থানা : রাঙ্গুনিয়া <br />উপজেলা :
              রাঙ্গুনিয়া <br />জেলা : চট্টগ্রাম <br />বিভাগ : চট্টগ্রাম।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
