// import React from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Label } from "@radix-ui/react-dropdown-menu";
// import { Input } from "@/components/ui/input";
// import { Loader2 } from "lucide-react";
// import Courses from "./Courses";
// const Profile = () => {
//     const isLoading = false;
//     const enrolledCourses =[1,2,3];
//   return (
//     <div className=" max-w-4xl mx-auto px-4 my-24">
//       <h1 className="font-bold text-2xl text-center md:text-left">Profile</h1>
//       <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
//         <div className="flex flex-col items-center">
//           <Avatar className='h-24 w-24 md:h-32 md:w-32 mb-4'>
//             <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//             <AvatarFallback>CN</AvatarFallback>
//           </Avatar>
//         </div>
//         <div>
//             <div className="mb-2">
//                 <h1 className="font-semibold text-gray-900 dark:text-gray-300">
//                     Name:
//                     <span className="font-normal text-gray-700 dark:text-gary-300 ml-2">Sonu Kumar</span>
//                 </h1>
//             </div>
//             <div className="mb-2">
//                 <h1 className="font-semibold text-gray-900 dark:text-gray-300">
//                     Email:
//                     <span className="font-normal text-gray-700 dark:text-gary-300 ml-2">sonuroy1629@gmail.com</span>
//                 </h1>
//             </div>
//             <div className="mb-2">
//                 <h1 className="font-semibold text-gray-900 dark:text-gray-300">
//                     Role:
//                     <span className="font-normal text-gray-700 dark:text-gary-300 ml-2">Instructor</span>
//                 </h1>
//             </div>
//             {/* Dialog */}
//             <Dialog>
//                 <DialogTrigger asChild>
//                 <Button size="sm" className='mt-2'>Edit Profile</Button>
//                 </DialogTrigger>
//                 <DialogContent>
//                    <DialogHeader>
//                     <DialogTitle>
//                         Edit Profile
//                     </DialogTitle>
//                     <DialogDescription>
//                         Make Change To Your Profile Here.Click Save When You're Done.
//                     </DialogDescription>
//                     </DialogHeader> 
//                     <div className="grid gap-4 py-4">
//                         <div className="grid grid-cols-4 items-center gap-4">
//                             <Label>Name</Label>
//                             <Input type='text' placeholder='Name'
//                             className='col-span-3'
//                             />
//                         </div>
//                         <div className="grid grid-cols-4 items-center gap-4">
//                             <Label>Profile Photo</Label>
//                             <Input type='file' placeholder='Upload' accept='image/*'
//                             className='col-span-3'
//                             />
//                         </div>
//                     </div>
//                     <DialogFooter>
//                         <Button disable={isLoading}>
//                             {
//                                 isLoading ? (
//                                     <>
//                                     <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait
//                                     </>
//                                 ) :(
//                                     "Save Change"
//                                 )
//                             }
//                         </Button>
//                     </DialogFooter>
//                 </DialogContent>
//             </Dialog>
//         </div>
//       </div>
//       <div className="font-medium text-lg">
//         <h1 className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">Courses You're Enrolled</h1>
//         {
//             enrolledCourses.length === 0 ? <h1>You Haven't Enrolled Yet</h1>
//             :(
//                 enrolledCourses.map((course, index) => <Courses key={index}/>)
//             )
//         }
//       </div>
//     </div>
//   );
// };

// export default Profile;

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import Course from "./Course";
import {
  useLoadUserQuery,
  useUpdateUserMutation,
} from "@/Features/Api/authApi";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Profile = () => {
  const [name, setName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  const { data, isLoading, refetch } = useLoadUserQuery();
  const [
    updateUser,
    {
      data: updateUserData,
      isLoading: updateUserIsLoading,
      isError,
      error,
      isSuccess,
    },
  ] = useUpdateUserMutation();

  const onChangeHandler = (e) => {
    const file = e.target.files?.[0];
    if (file) setProfilePhoto(file);
  };

  const updateUserHandler = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("profilePhoto", profilePhoto);
    await updateUser(formData);
  };

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      refetch();
      toast.success(data.message || "Profile updated.");
    }
    if (isError) {
      toast.error(error.message || "Failed to update profile");
    }
  }, [error, updateUserData, isSuccess, isError]);

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin h-8 w-8 text-blue-600" />
      </div>
    );

  const user = data?.user;

  return (
    <motion.div
      className="mt-24 max-w-5xl mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="font-extrabold text-3xl text-center md:text-left mb-6">
        👤 Profile Overview
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          <Avatar className="h-28 w-28 md:h-36 md:w-36 shadow-md border">
            <AvatarImage
              src={user?.photoUrl || "https://github.com/shadcn.png"}
              alt="User Avatar"
            />
            <AvatarFallback>{user?.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="mt-4 hover:scale-105 transition">
                ✏️ Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Edit Your Profile</DialogTitle>
                <DialogDescription>
                  Update your name or profile picture here.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label>Name</Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label>Photo</Label>
                  <Input
                    onChange={onChangeHandler}
                    type="file"
                    accept="image/*"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  onClick={updateUserHandler}
                  disabled={updateUserIsLoading}
                >
                  {updateUserIsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "💾 Save Changes"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </motion.div>

        <div className="space-y-3 text-center md:text-left w-full">
          <h2 className="text-lg font-medium">
            Name:
            <span className="ml-2 font-normal text-gray-700 dark:text-gray-300">
              {user.name}
            </span>
          </h2>
          <h2 className="text-lg font-medium">
            Email:
            <span className="ml-2 font-normal text-gray-700 dark:text-gray-300">
              {user.email}
            </span>
          </h2>
          <h2 className="text-lg font-medium">
            Role:
            <span className="ml-2 font-normal text-gray-700 dark:text-gray-300">
              {user.role.toUpperCase()}
            </span>
          </h2>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-xl font-semibold mb-4 text-center md:text-left">
          📚 Courses You're Enrolled In
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {user.enrolledCourses.length === 0 ? (
            <motion.div
              className="text-center text-gray-600 col-span-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              You haven't enrolled in any courses yet.
            </motion.div>
          ) : (
            user.enrolledCourses.map((course) => (
              <motion.div
                key={course._id}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Course course={course} />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;







