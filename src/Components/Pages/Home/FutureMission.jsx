import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const FutureMission = () => {
  // Create individual states for each dialog
  const [openEducation, setOpenEducation] = React.useState(false);
  const [openHealth, setOpenHealth] = React.useState(false);
  const [openPoverty, setOpenPoverty] = React.useState(false);
  const [openWomenEmpowerment, setOpenWomenEmpowerment] = React.useState(false);
  const [openAwareness, setOpenAwareness] = React.useState(false);
  const [openEnvironment, setOpenEnvironment] = React.useState(false);

  // Handler functions for each dialog
  const handleOpenEducation = () => setOpenEducation(!openEducation);
  const handleOpenHealth = () => setOpenHealth(!openHealth);
  const handleOpenPoverty = () => setOpenPoverty(!openPoverty);
  const handleOpenWomenEmpowerment = () =>
    setOpenWomenEmpowerment(!openWomenEmpowerment);
  const handleOpenAwareness = () => setOpenAwareness(!openAwareness);
  const handleOpenEnvironment = () => setOpenEnvironment(!openEnvironment);

  return (
    <div className="container mx-auto z-10 px-4">
      {/* Responsive grid for large (4 cards), medium (3 cards), small (2 cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        
        {/* Education Development Card */}
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img src="/07.jpg" alt="Education" />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-center m-auto ">
              <Button onClick={handleOpenEducation} variant="gradient" className="transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500">
                শিক্ষা উন্নয়ন
              </Button>
              <Dialog open={openEducation} handler={handleOpenEducation}>
                <DialogHeader>শিক্ষা উন্নয়ন</DialogHeader>
                <DialogBody>
                  আমরা হাফেজপাড়া জনকল্যাণ সংস্থায় বিশ্বাস করি যে শিক্ষা একটি
                  সমাজের ভিত্তি গঠন করে। আমাদের শিক্ষা উন্নয়ন কার্যক্রমের মধ্যে
                  ভবিষ্যতে থাকবে সুবিধাবঞ্চিত শিশুদের জন্য বিনামূল্যে শিক্ষা
                  প্রদান, যেখানে আমরা তাদের স্থানীয় স্কুলে ভর্তি করাব এবং
                  প্রয়োজনীয় শিক্ষাসামগ্রী বিতরণ করব। আমাদের উদ্দেশ্য হবে
                  প্রত্যেক শিশুকে শিক্ষার আলোয় আলোকিত করা, যাতে তারা তাদের
                  পূর্ণ সম্ভাবনা অনুযায়ী বেড়ে উঠতে পারে। এছাড়া, আমরা নিয়মিত
                  শিক্ষা সচেতনতা কর্মশালা আয়োজন করব, যা স্থানীয় অভিভাবকদের
                  তাদের সন্তানদের শিক্ষার গুরুত্ব সম্পর্কে আরও সচেতন করবে।
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpenEducation}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  
                </DialogFooter>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Health Care Card */}
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img src="/08.jpg" alt="Health" />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-center m-auto ">
              <Button onClick={handleOpenHealth} variant="gradient" className="transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500">
                স্বাস্থ্য সেবা
              </Button>
              <Dialog open={openHealth} handler={handleOpenHealth}>
                <DialogHeader>স্বাস্থ্য সেবা</DialogHeader>
                <DialogBody>
                  স্বাস্থ্যই সম্পদ, এই বিশ্বাসে আমরা আমাদের স্বাস্থ্যসেবা
                  কার্যক্রম ভবিষ্যতে চালিয়ে যাব। নিয়মিত ফ্রি মেডিকেল ক্যাম্পের
                  মাধ্যমে আমরা সমাজের নিম্নআয়ের মানুষদের প্রয়োজনীয়
                  স্বাস্থ্যসেবা প্রদান করব। আমাদের রক্তদান কর্মসূচির মাধ্যমে
                  আমরা রক্তের অভাবে কষ্ট পাচ্ছে এমন রোগীদের সাহায্য করব। এছাড়া,
                  আমরা স্বাস্থ্য সচেতনতা বৃদ্ধি করার লক্ষ্যে বিভিন্ন কর্মসূচি
                  আয়োজন করব, যেখানে স্বাস্থ্যবিষয়ক পরামর্শ এবং বিভিন্ন রোগের
                  প্রতিরোধের উপায় নিয়ে আলোচনা করা হবে।
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpenHealth}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  
                </DialogFooter>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Poverty Alleviation Card */}
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/09.jpeg"
              alt="Poverty Alleviation"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-center m-auto opacity-85">
              <Button onClick={handleOpenPoverty} variant="gradient" className="transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500">
                দারিদ্র্য বিমোচন
              </Button>
              <Dialog open={openPoverty} handler={handleOpenPoverty}>
                <DialogHeader>দারিদ্র্য বিমোচন</DialogHeader>
                <DialogBody>
                  দারিদ্র্য বিমোচন আমাদের প্রধান লক্ষ্যগুলির মধ্যে একটি। দরিদ্র
                  ও অসহায় মানুষের জীবনমান উন্নয়নের লক্ষ্যে আমরা নিয়মিত খাদ্য
                  বিতরণ কর্মসূচি পরিচালনা করব। এছাড়া, আমরা দরিদ্র পরিবারগুলির
                  জন্য গৃহ নির্মাণ এবং অর্থনৈতিক সহায়তা প্রদান করব। আমাদের এই
                  কার্যক্রমের মাধ্যমে আমরা তাদের জীবনে স্থায়ী পরিবর্তন আনতে
                  সক্ষম হব, যা তাদের সামাজিক ও অর্থনৈতিক অবস্থার উন্নয়নে
                  সহায়তা করবে।
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpenPoverty}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  
                </DialogFooter>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Women's Empowerment Card */}
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/10.jpg"
              alt="Women Empowerment"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-center m-auto opacity-85">
              <Button onClick={handleOpenWomenEmpowerment} variant="gradient" className="transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500">
                মহিলা উন্নয়ন
              </Button>
              <Dialog
                open={openWomenEmpowerment}
                handler={handleOpenWomenEmpowerment}
              >
                <DialogHeader>মহিলা উন্নয়ন</DialogHeader>
                <DialogBody>
                  আমরা নারীদের ক্ষমতায়নে বিশ্বাস করি এবং তাদের স্বাবলম্বী করে
                  তোলার জন্য বিভিন্ন কার্যক্রম পরিচালনা করি। আমাদের সেলাই
                  প্রশিক্ষণ কর্মসূচির মাধ্যমে নারীদের সেলাই দক্ষতা উন্নত করা
                  হবে, যা তাদের আয়ের একটি স্থায়ী উৎস সৃষ্টি করবে। এছাড়া, আমরা
                  ক্ষুদ্র ব্যবসায়িক সহায়তা প্রদান করে তাদের অর্থনৈতিক অবস্থার
                  উন্নয়নে সহায়তা করব। আমাদের সচেতনতামূলক কর্মসূচির মাধ্যমে
                  আমরা নারীদের অধিকার এবং তাদের সুরক্ষা সম্পর্কে সচেতন করব, যা
                  তাদের সামাজিক ও অর্থনৈতিক উন্নয়নে সাহায্য করবে।
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpenWomenEmpowerment}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  
                </DialogFooter>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Social Awareness Card */}
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/11.png"
              alt="Social Awareness"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-center m-auto opacity-85">
              <Button onClick={handleOpenAwareness} variant="gradient" className="transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500">
                সামাজিক সচেতনতা
              </Button>
              <Dialog open={openAwareness} handler={handleOpenAwareness}>
                <DialogHeader>সামাজিক সচেতনতা</DialogHeader>
                <DialogBody>
                  সমাজের বিভিন্ন সমস্যা সম্পর্কে সচেতনতা বৃদ্ধি করার জন্য আমরা
                  ভবিষ্যতেও নিয়মিত সেমিনার এবং কর্মশালার আয়োজন করব। আমাদের
                  সামাজিক সচেতনতা কর্মসূচির মাধ্যমে আমরা স্থানীয়দের মধ্যে
                  শিক্ষা, স্বাস্থ্য, নারী অধিকার, এবং পরিবেশ সংরক্ষণ বিষয়ে
                  সচেতনতা বৃদ্ধি করব। এছাড়া, আমরা প্রচারণামূলক কার্যক্রমের
                  মাধ্যমে সমাজের বিভিন্ন সমস্যার সমাধানের জন্য কাজ করব। আমাদের
                  লক্ষ্য থাকবে একটি সচেতন সমাজ গঠন করা, যেখানে প্রত্যেক মানুষ
                  নিজের দায়িত্ব সম্পর্কে সচেতন থাকবে।
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpenAwareness}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                 
                </DialogFooter>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Environmental Protection Card */}
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src="/13.jpg"
              alt="Environment Protection"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-center m-auto opacity-85">
              <Button onClick={handleOpenEnvironment} variant="gradient" className="transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500">
                পরিবেশ সংরক্ষণ
              </Button>
              <Dialog open={openEnvironment} handler={handleOpenEnvironment}>
                <DialogHeader>পরিবেশ সংরক্ষণ</DialogHeader>
                <DialogBody>
                  পরিবেশ সংরক্ষণ আমাদের অন্যতম প্রধান কার্যক্রম। আমরা বৃক্ষরোপণ
                  কর্মসূচির মাধ্যমে ভবিষ্যতেও স্থানীয় এলাকায় বৃক্ষরোপণ করে
                  পরিবেশের উন্নয়নে কাজ করব। এছাড়া, আমরা নিয়মিত পরিচ্ছন্নতা
                  অভিযান পরিচালনা করব, যা স্থানীয় এলাকাকে পরিচ্ছন্ন এবং
                  স্বাস্থ্যকর রাখতে সাহায্য করবে। আমরা পুনর্ব্যবহারযোগ্য সামগ্রী
                  ব্যবহারের মাধ্যমে পরিবেশের ওপর নেতিবাচক প্রভাব কমানোর চেষ্টা
                  করব এবং স্থানীয়দের মধ্যে পরিবেশ সচেতনতা বৃদ্ধি করব। আমাদের
                  লক্ষ্য থাকবে একটি সবুজ এবং স্বাস্থ্যকর পরিবেশ তৈরি করা, যা
                  ভবিষ্যৎ প্রজন্মের জন্য একটি সুন্দর পৃথিবী উপহার দেবে।
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpenEnvironment}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  
                </DialogFooter>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureMission;
