
// new code
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroCarousel from "./HeroCrousel";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/course/search?query=${searchQuery}`);
    }
    setSearchQuery("");
  };

  return (
    <>
      {/* Carousel Section */}
      <div className="-mt-14 w-screen">
        <HeroCarousel />
      </div>

      {/* Hero Content Section */}
      <div className="w-[100vw] min-h-screen relative bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 py-20 px-4 sm:px-8 flex items-center justify-center text-center overflow-x-hidden">
        <div className="max-w-4xl w-full">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-center">
            Find the Best Courses for You
          </h1>
          <p className="text-gray-200 dark:text-gray-400 text-base sm:text-lg md:text-xl mb-8 md:mb-10">
            Discover, Learn, and Upskill with our wide range of expert-curated
            courses
          </p>

          <form
            onSubmit={searchHandler}
            className="flex flex-col sm:flex-row items-center bg-white dark:bg-gray-800 rounded-full shadow-xl overflow-hidden max-w-2xl mx-auto mb-6"
          >
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Courses"
              className="w-full sm:flex-grow border-none focus-visible:ring-0 px-6 py-3 text-base md:text-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            />
            <Button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 dark:bg-blue-700 text-white px-6 sm:px-8 py-3 md:py-4 text-base md:text-lg rounded-b-full sm:rounded-b-none sm:rounded-r-full hover:bg-blue-700 dark:hover:bg-blue-800 transition-all"
            >
              Search
            </Button>
          </form>

          <Button
            onClick={() => navigate(`/course/search?query`)}
            className="bg-white dark:bg-gray-800 text-blue-600 text-base md:text-lg px-8 py-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          >
            Explore Courses
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

