import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// Layouts
import MainLayout from "./Layout/MainLayout";

// Public Pages
import HeroSection from "./pages/Students/HeroSection";
import Courses from "./pages/Students/Courses";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import CertificationPage from "./pages/CertificationPage";
import CertificationListing from "./pages/CertificationListing";
import Login from "./pages/Login";
import CertificationDetails from './pages/CertificationDetails';

// Students (Protected)
import MyLearning from "./pages/Students/MyLearning";
import Profile from "./pages/Students/Profile";
import SearchPage from "./pages/Students/SearchPage";
import CourseDetail from "./pages/Students/CourseDetail";
import CourseProgress from "./pages/Students/CourseProgress";

// Admin Pages
import Sidebar from "./pages/Admin/Sidebar";
import Dashboard from "./pages/Admin/Dashboard";
import CourseTable from "./pages/Admin/Course/CourseTable";
import AddCourse from "./pages/Admin/Course/AddCourse";
import EditCourse from "./pages/Admin/Course/EditCourse";
import CreateLecture from "./pages/Admin/Lecture/CreateLecture";
import EditLecture from "./pages/Admin/Lecture/EditLecture";

// Protected Routes
import {
  AdminRoute,
  AuthenticatedUser,
  ProtectedRoute,
} from "./components/ProtectedRoutes";
import PurchaseCourseProtectedRoute from "./components/PurchaseCourseProtectedRoute";

// Theme
import { ThemeProvider } from "./components/ThemeProvider";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
            <CertificationListing/>
          </>
        ),
      },
      { path: "about", element: <About /> },
      { path: "blogs", element: <Blogs /> },
      { path: "certifications", element: <CertificationPage /> },
      { path: "student/certifications", element: <CertificationListing /> },
      {
        path: "student/certification/:category/:id",
        element: <CertificationDetails />
      },
      { path: "login", element: <AuthenticatedUser><Login /></AuthenticatedUser> },
      { path: "my-learning", element: <ProtectedRoute><MyLearning /></ProtectedRoute> },
      { path: "profile", element: <ProtectedRoute><Profile /></ProtectedRoute> },
      { path: "course/search", element: <ProtectedRoute><SearchPage /></ProtectedRoute> },
      {
        path: "course-detail/:courseId",
        element: <ProtectedRoute><CourseDetail /></ProtectedRoute>,
      },
      {
        path: "course-progress/:courseId",
        element: (
          <ProtectedRoute>
            <PurchaseCourseProtectedRoute>
              <CourseProgress />
            </PurchaseCourseProtectedRoute>
          </ProtectedRoute>
        ),
      },

      // Admin Routes
      {
        path: "admin",
        element: <AdminRoute><Sidebar /></AdminRoute>,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "course", element: <CourseTable /> },
          { path: "course/create", element: <AddCourse /> },
          { path: "course/:courseId", element: <EditCourse /> },
          { path: "course/:courseId/lecture", element: <CreateLecture /> },
          { path: "course/:courseId/lecture/:lectureId", element: <EditLecture /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <ThemeProvider>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </main>
  );
}

export default App;
