// // // import React, { useState, useEffect } from 'react';

// // // import Courses from './Courses';

// // // const MyLearning = () => {
// // //     const isLoading = false;
// // //     const myLearningCourses = [];

// // //     return (
// // //         <div className='max-w-4xl mx-auto my-24 px-4 md:px-0'>
// // //             <h1 className='font-bold text-2xl'>MY LEARNING</h1>
// // //             <div className='my-5'>
// // //                 {isLoading ? (
// // //                     <MyLearningSkeleton />
// // //                 ) : myLearningCourses.length === 0 ? (
// // //                     <p>You are not Enrolled in any Courses</p>
// // //                 ) : (
// // //                    <div>
// // //                     {myLearningCourses.map((course, index) => (
// // //                         <Courses key={index} course={course} />
// // //                     ))}
// // //                    </div>
// // //                 )}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default MyLearning;

// // // // Fixed MyLearningSkeleton component
// // // const MyLearningSkeleton = () => {
// // //     return (
// // //         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
// // //             {[...Array(3)].map((_, index) => (
// // //                 <div
// // //                     key={index}
// // //                     className='bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse'
// // //                 ></div>
// // //             ))}
// // //         </div>
// // //     );
// // // };


// // import React from "react";
// // import Course from "./Course";
// // import { useLoadUserQuery } from "@/Features/Api/authApi";

// // const MyLearning = () => { 
// //   const {data, isLoading} = useLoadUserQuery();

// //   const myLearning = data?.user.enrolledCourses || [];
// //   return (
// //     <div className="max-w-4xl mx-auto my-10 px-4 md:px-0">
// //       <h1 className="font-bold text-2xl">MY LEARNING</h1>
// //       <div className="my-5">
// //         {isLoading ? (
// //           <MyLearningSkeleton />
// //         ) : myLearning.length === 0 ? (
// //           <p>You are not enrolled in any course.</p>
// //         ) : (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //             {myLearning.map((course, index) => (
// //               <Course key={index} course={course}/>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MyLearning;

// // // Skeleton component for loading state
// import React from "react";
// import Course from "./Course";
// import { useLoadUserQuery } from "@/Features/Api/authApi";

// const MyLearning = () => { 
//   const {data, isLoading} = useLoadUserQuery();

//   const myLearning = data?.user.enrolledCourses || [];
//   return (
//     <div className="mt-20 max-w-4xl mx-auto my-10 px-4 md:px-0">
//       <h1 className="font-bold text-2xl">MY LEARNING</h1>
//       <div className="my-5">
//         {isLoading ? (
//           <MyLearningSkeleton />
//         ) : myLearning.length === 0 ? (
//           <p>You are not enrolled in any course.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {myLearning.map((course, index) => (
//               <Course key={index} course={course}/>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyLearning;

// // Skeleton component for loading state
// const MyLearningSkeleton = () => (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//     {[...Array(3)].map((_, index) => (
//       <div
//         key={index}
//         className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
//       ></div>
//     ))}
//   </div>
// );


// new code
import React from "react";
import Course from "./Course";
import { useLoadUserQuery } from "@/Features/Api/authApi";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const MyLearning = () => {
  const { data, isLoading } = useLoadUserQuery();
  const myLearning = data?.user.enrolledCourses || [];

  return (
    <div className="mt-24 max-w-6xl mx-auto px-6 md:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold text-center text-primary flex items-center justify-center gap-2"
      >
        <Sparkles className="text-yellow-500" /> My Learning Journey
      </motion.h1>

      <div className="my-10">
        {isLoading ? (
          <MyLearningSkeleton />
        ) : myLearning.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 dark:text-gray-400 text-lg mt-10"
          >
            You haven't enrolled in any courses yet. Explore and start learning!
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {myLearning.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Course course={course} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MyLearning;

// 🔄 Animated skeleton loader
const MyLearningSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {[...Array(3)].map((_, index) => (
      <div
        key={index}
        className="rounded-xl h-52 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse shadow-md"
      />
    ))}
  </div>
);

