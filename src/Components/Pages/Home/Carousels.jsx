import { Carousel, Typography, Button } from "@material-tailwind/react";

const Carousels = () => {
  return (
    <div style={{ height: '600px' }}>
      <Carousel className="rounded-xl">
        <div className="relative h-full w-full">
          <img src="/01.jpg" className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-4xl md:text-3xl lg:text-4xl"
              >
                হাফেজপাড়া জনকল্যাণ সংস্থার পক্ষ থেকে আপনাকে স্বাগত
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                হাফেজপাড়া জনকল্যাণ সংস্থা একটি সামাজিক ও অরাজনৈতিক সংগঠন, যা সমাজের সার্বিক উন্নয়নে নিবেদিত।
              </Typography>
              
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img src="/02.jpg" className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-4xl md:text-4xl lg:text-5xl"
              >
                হাফেজপাড়া জনকল্যাণ সংস্থার লক্ষ্য
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                আমাদের লক্ষ্য একটি এমন সমাজ তৈরি করা যেখানে প্রতিটি মানুষ শান্তি ও শৃঙ্খলার সাথে বসবাস করতে পারে। আমরা সমাজের প্রতিটি সদস্যকে উৎসাহিত করি সমাজের কল্যাণে অবদান রাখার জন্য।
              </Typography>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img src="/03.jpg" className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
               হাফেজপাড়া জনকল্যাণ সংস্থার কার্যক্রম
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                হাফেজপাড়া জনকল্যাণ সংস্থা শিক্ষা, স্বাস্থ্যসেবা, দারিদ্র্য বিমোচন, এবং সামাজিক সচেতনতা বৃদ্ধির মাধ্যমে সমাজের উন্নয়নে কাজ করে যাচ্ছে।
              </Typography>
            </div>
          </div>
        </div>


        <div className="relative h-full w-full">
          <img src="/04.jpg" className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-4xl md:text-4xl lg:text-5xl"
              >
               আমাদের সাথে থাকুন
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                আসুন, আমরা একসাথে সমাজকে আরও সুন্দর, সুশৃঙ্খল এবং বাসযোগ্য করে তুলি। আমাদের উদ্যোগে অংশগ্রহণ করুন এবং সমাজের উন্নয়নে আপনার অবদান রাখুন।
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
