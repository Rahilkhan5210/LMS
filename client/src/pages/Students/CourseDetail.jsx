
import BuyCourseButton from "@/components/BuyCourseButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetCourseDetailWithStatusQuery } from "@/Features/Api/purchaseApi";
import { BadgeInfo, Lock, PlayCircle } from "lucide-react";
import React from "react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";

const CourseDetail = () => {
  const params = useParams();
  const courseId = params.courseId;
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetCourseDetailWithStatusQuery(courseId);

  if (isLoading) return <h1 className="text-center text-lg font-semibold mt-10 animate-pulse">Loading...</h1>;
  if (isError) return <h1 className="text-center text-red-500 mt-10">Failed to load course details</h1>;

  const { course, purchased } = data;

  const handleContinueCourse = () => {
    if (purchased) {
      navigate(`/course-progress/${courseId}`);
    }
  };

  return (
    <div className="-mt-20 w-screen min-h-screen bg-gradient-to-br from-[#1F1C2C] to-[#928DAB] text-white">
      {/* Header Section */}
      <div className="bg-gray-900 bg-opacity-40 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 space-y-3">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{course?.courseTitle}</h1>
          <p className="text-lg text-indigo-200">Unleash your learning with this powerful course</p>
          <p className="text-sm">
            Created by <span className="text-indigo-400 italic underline">{course?.creator.name}</span>
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <BadgeInfo size={16} />
            <span>Last updated {course?.createdAt?.split("T")[0]}</span>
          </div>
          <p className="text-sm">👨‍🎓 Enrolled Students: {course?.enrolledStudents.length}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-10 flex flex-col lg:flex-row gap-10">
        {/* Course Info */}
        <div className="w-full lg:w-2/3 space-y-6">
          <h2 className="text-2xl font-bold text-white">Course Description</h2>
          <div
            className="text-sm leading-relaxed text-black-300 bg-black bg-opacity-10 p-4 rounded-xl shadow-sm"
            dangerouslySetInnerHTML={{ __html: course.description }}
          />

          {/* Course Content */}
          <Card className="bg-white bg-opacity-10 border-none backdrop-blur-md rounded-xl text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">📚 Course Content</CardTitle>
              <CardDescription className="text-indigo-200">{course.lectures.length} Lectures</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {course.lectures.map((lecture, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-2 py-2 rounded-lg transition-all hover:bg-black hover:bg-opacity-10 cursor-pointer"
                >
                  {purchased ? (
                    <PlayCircle size={18} className="text-green-400" />
                  ) : (
                    <Lock size={18} className="text-red-400" />
                  )}
                  <span className="text-sm">{lecture.lectureTitle}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Preview Card */}
        <div className="lg:w-1/3">
          <div className="rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg shadow-2xl overflow-hidden">
            <div className="p-4 space-y-4">
              <div className="aspect-video rounded-md overflow-hidden border border-white border-opacity-20">
                <ReactPlayer
                  url={course.lectures[0]?.videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
              <h1 className=" text-black text-lg font-semibold">🎬 Preview Lecture</h1>
              <Separator className="bg-white bg-opacity-20" />
              <p className="text-xl font-bold text-green-300">💰 {course.coursePrice}</p>
            </div>
            <CardFooter className="p-4">
              {purchased ? (
                <Button
                  onClick={handleContinueCourse}
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white hover:opacity-90 transition"
                >
                  Continue Learning
                </Button>
              ) : (
                <BuyCourseButton courseId={courseId} />
              )}
            </CardFooter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

