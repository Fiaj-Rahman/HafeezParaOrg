import React from "react";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const MapHeading = () => {
    const { theme } = useTheme();
  return (
    <div className="py-5">
      <h1
        className={`text-3xl sm:text-4xl md:text-4xl font-serif font-bold text-center my-10 uppercase ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        আমাদের অবস্থান
      </h1>
    </div>
  );
};

export default MapHeading;
