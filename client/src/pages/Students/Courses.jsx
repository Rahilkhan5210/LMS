
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Course from "./Course";
import { useGetPublishedCourseQuery } from "@/Features/Api/courseApi";

const Courses = () => {
  const { data, isLoading, isError } = useGetPublishedCourseQuery();

  if (isError) {
    return (
      <h1 className="text-red-600 text-center mt-10 text-lg">
        Some error occurred while fetching courses.
      </h1>
    );
  }

  return (
    <div className="w-screen bg-gray-50 dark:bg-[#121212]  min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
          🚀 Our Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <CourseSkeleton key={index} />
              ))
            : data?.courses &&
              data.courses.map((course, index) => (
                <div
                  key={index}
                  className="transform hover:scale-[1.02] transition duration-300 ease-in-out hover:shadow-xl -mt-4 w-full h-[450px]"
                >
                  <Course course={course} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;


// Skeleton Loader Component
const CourseSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out overflow-hidden w-full h-[450px] -mt-4">
      <Skeleton className="w-full h-40 rounded-t-lg" />
      <div className="p-5 space-y-4">
        <Skeleton className="h-6 w-3/4 rounded" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-4 w-24 rounded" />
          </div>
          <Skeleton className="h-4 w-12 rounded" />
        </div>
        <Skeleton className="h-4 w-1/2 rounded" />
      </div>
    </div>
  );
};

