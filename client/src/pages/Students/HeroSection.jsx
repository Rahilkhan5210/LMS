// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-[80vh] md:h-[85vh] bg-gray-900 text-white">
//       {/* Swiper Carousel */}
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         className="w-full h-full"
//       >
//         <SwiperSlide>
//           <img
//             src="https://images.unsplash.com/photo-1539883305165-f691affc6c54?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="E-Learning 1"
//             className="w-full h-full object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://images.unsplash.com/photo-1447023029226-ef8f6b52e3ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="E-Learning 2"
//             className="w-full h-full object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://images.unsplash.com/3/doctype-hi-res.jpg?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="E-Learning 3"
//             className="w-full h-full object-cover"
//           />
//         </SwiperSlide>
//       </Swiper>

//       {/* Overlay Content */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 px-6">
//         <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//           Upskill Yourself with the Best Online Courses
//         </h1>
//         <p className="mt-4 text-lg md:text-xl text-gray-200">
//           Learn from industry experts and get certified in trending skills.
//         </p>
//         <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white text-lg font-semibold">
//           Start Learning Now
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

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
      <div className="-mt-16 w-screen overflow-x-hidden">
        <HeroCarousel />
      </div>

      {/* Hero Content Section */}
      <div className="w-screen min-h-screen relative bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 py-20 px-4 sm:px-8 flex items-center justify-center text-center overflow-x-hidden">
        <div className="max-w-4xl w-full">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
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

