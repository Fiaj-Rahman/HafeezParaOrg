import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const FutureMission = () => {
  // State for each mission card
  const missions = [
    {
      title: "শিক্ষা উন্নয়ন",
      image: "/07.jpg",
      points: [
        "বিনামূল্যে শিক্ষা প্রদান সুবিধাবঞ্চিত শিশুদের জন্য।",
        "স্থানীয় স্কুলে ভর্তি করাব এবং প্রয়োজনীয় শিক্ষাসামগ্রী বিতরণ করব।",
        "শিক্ষা সচেতনতা কর্মশালা আয়োজন করব।",
      ],
    },
    {
      title: "স্বাস্থ্য সেবা",
      image: "/08.jpg",
      points: [
        "নিয়মিত ফ্রি মেডিকেল ক্যাম্পের মাধ্যমে স্বাস্থ্যসেবা প্রদান।",
        "রক্তদান কর্মসূচির মাধ্যমে রোগীদের সাহায্য।",
        "স্বাস্থ্য সচেতনতা বৃদ্ধির লক্ষ্যে বিভিন্ন কর্মসূচি আয়োজন।",
      ],
    },
    {
      title: "দারিদ্র্য বিমোচন",
      image: "/09.jpeg",
      points: [
        "নিয়মিত খাদ্য বিতরণ কর্মসূচি পরিচালনা।",
        "দরিদ্র পরিবারগুলির জন্য গৃহ নির্মাণ এবং অর্থনৈতিক সহায়তা প্রদান।",
        "দারিদ্র্য দূরীকরণের জন্য কর্মসংস্থান সৃষ্টি।",
      ],
    },
    {
      title: "মহিলা উন্নয়ন",
      image: "/10.jpg",
      points: [
        "নারীদের সেলাই দক্ষতা উন্নত করা।",
        "ক্ষুদ্র ব্যবসায়িক সহায়তা প্রদান।",
        "নারীদের অধিকার সম্পর্কে সচেতনতা বৃদ্ধি।",
      ],
    },
    {
      title: "সামাজিক সচেতনতা",
      image: "/11.png",
      points: [
        "নিয়মিত সেমিনার এবং কর্মশালার আয়োজন।",
        "শিক্ষা, স্বাস্থ্য, নারী অধিকার এবং পরিবেশ সংরক্ষণ বিষয়ে সচেতনতা বৃদ্ধি।",
        "স্থানীয় সমস্যার সমাধানে অংশগ্রহণের সুযোগ সৃষ্টি।",
      ],
    },
    {
      title: "পরিবেশ সংরক্ষণ",
      image: "/13.jpg",
      points: [
        "বৃক্ষরোপণ কর্মসূচির মাধ্যমে পরিবেশের উন্নয়নে কাজ।",
        "নিয়মিত পরিচ্ছন্নতা অভিযান পরিচালনা।",
        "পুনর্ব্যবহারযোগ্য সামগ্রী ব্যবহারের মাধ্যমে পরিবেশের ওপর নেতিবাচক প্রভাব কমানো।",
      ],
    },
  ];
  const { theme } = useTheme();
  return (
    <div className="container mx-auto z-10 px-4">
      <h1
        className={`text-3xl sm:text-4xl md:text-4xl font-serif font-bold text-center my-10 uppercase ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
         কেন আপনি আমাদের সাথে যোগদান করবেন
      </h1>
      {/* Responsive grid for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((mission, index) => (
          <Card key={index} color="gray" variant="gradient" className="p-6">
            <CardHeader floated={false} shadow={false} color="transparent" className="mb-4 text-center">
              <Typography variant="h5" color="white" className="font-bold">
                {mission.title}
              </Typography>
            </CardHeader>
            <figure>
              <img src={mission.image} alt={mission.title} className="object-cover h-48 w-full rounded-md" />
            </figure>
            <CardBody className="p-0">
              <ul className="flex flex-col gap-2 mt-4">
                {mission.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal">{point}</Typography>
                  </li>
                ))}
              </ul>
            </CardBody>
            
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FutureMission;

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
