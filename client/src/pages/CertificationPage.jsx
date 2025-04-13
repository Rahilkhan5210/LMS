// import { GraduationCap, TvMinimalPlay, BookOpen, Award, Newspaper, Phone, Search, Gift, User, Mail, Facebook, Instagram, Twitter, HelpCircle, Menu, X } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import HeroCarousel from "./Students/HeroCrousel";
// import CertificationDropDown from "./CertificationDropDown";
// import logo from "../assets/frontend_assets/logo.png";
// import { Button } from "../components/ui/button";

// function CertificationPage() {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showCertifications, setShowCertifications] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   function handleLogout() {
//     sessionStorage.clear();
//   }

//   function handleSearch(e) {
//     e.preventDefault();
//     console.log("Searching for:", searchQuery);
//   }

//   return (
//     <>
//       {/* Top Bar with Contact and Social Media */}
//       <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-2 px-4">
//         <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
//           <div className="flex items-center space-x-4 text-sm mb-2 sm:mb-0">
//             <a href="tel:+1234567890" className="flex items-center hover:text-blue-300 transform hover:scale-105 transition-all duration-200">
//               <Phone className="h-4 w-4 mr-1" />
//               <span className="hidden sm:inline">+1 (234) 567-890</span>
//             </a>
//             <span className="hidden sm:inline text-gray-400">|</span>
//             <a href="mailto:info@learnlofts.com" className="flex items-center hover:text-blue-300 transform hover:scale-105 transition-all duration-200">
//               <Mail className="h-4 w-4 mr-1" />
//               <span className="hidden sm:inline">info@learnlofts.com</span>
//             </a>
//           </div>
//           <div className="flex items-center space-x-4 sm:space-x-6">
//             <div className="flex items-center space-x-3 sm:space-x-4">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transform hover:scale-110 transition-all duration-200">
//                 <Facebook className="h-4 w-4" />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transform hover:scale-110 transition-all duration-200">
//                 <Instagram className="h-4 w-4" />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transform hover:scale-110 transition-all duration-200">
//                 <Twitter className="h-4 w-4" />
//               </a>
//             </div>
//             <span className="hidden sm:inline text-gray-400">|</span>
//             <Button
//               variant="ghost"
//               onClick={() => navigate("/student/faq")}
//               className="text-white bg-blue-600/20 hover:bg-blue-600/30 flex items-center transform hover:scale-105 transition-all duration-200 rounded-full px-3 sm:px-4 py-1"
//             >
//               <HelpCircle className="h-4 w-4 mr-1" />
//               <span className="hidden sm:inline">FAQ</span>
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header className={`sticky top-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
//       }`}>
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16 sm:h-20">
//             <div className="flex items-center">
//               <Link to="/student/home" className="flex items-center hover:text-black transform hover:scale-105 transition-all duration-200">
//                 <img src={logo} alt="logo" className="h-8 sm:h-10 w-auto" />
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center space-x-6">
//               <Button
//                 variant="ghost"
//                 onClick={() => navigate("/student/home")}
//                 className="text-base font-medium hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center gap-2"
//               >
//                 <GraduationCap className="h-4 w-4" />
//                 Home
//               </Button>
//               <Button
//                 variant="ghost"
//                 onClick={() => navigate("/student/about")}
//                 className="text-base font-medium hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center gap-2"
//               >
//                 <BookOpen className="h-4 w-4" />
//                 About Us
//               </Button>
//               <div className="relative group"
//                    onMouseEnter={() => setShowCertifications(true)}
//                    onMouseLeave={() => setShowCertifications(false)}>
//                 <Button
//                   variant="ghost"
//                   onClick={() => navigate("/student/certification")}
//                   className="text-base font-medium hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center gap-2"
//                 >
//                   <Award className="h-4 w-4" />
//                   Certification
//                 </Button>
//                 {showCertifications && (
//                   <CertificationDropDown onMouseLeave={() => setShowCertifications(false)} />
//                 )}
//               </div>
//               <Button
//                 variant="ghost"
//                 onClick={() => navigate("/student/blogs")}
//                 className="text-base font-medium hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center gap-2"
//               >
//                 <Newspaper className="h-4 w-4" />
//                 Blogs
//               </Button>
//               <Button
//                 variant="ghost"
//                 onClick={() => navigate("/student/contact")}
//                 className="text-base font-medium hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center gap-2"
//               >
//                 <Phone className="h-4 w-4" />
//                 Contact
//               </Button>
//             </nav>

//             {/* Right Section */}
//             <div className="flex items-center space-x-4">
//               {/* Search Field */}
//               <form onSubmit={handleSearch} className="hidden md:block">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Search courses..."
//                     className="w-64 px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-400"
//                   />
//                   <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                 </div>
//               </form>

//               {/* My Courses Button */}
//               <div
//                 onClick={() => navigate("/student/student-courses")}
//                 className="hidden md:flex cursor-pointer items-center gap-2 hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
//               >
//                 <TvMinimalPlay className="h-6 w-6" />
//                 <span className="font-medium">My Courses</span>
//               </div>

//               {/* Profile Dropdown */}
//               <div className="relative group">
//                 <button className="flex items-center gap-2 focus:outline-none transform hover:scale-105 transition-all duration-200">
//                   <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-200">
//                     <User className="h-5 w-5 text-blue-600" />
//                   </div>
//                   <span className="hidden md:block text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
//                     Profile
//                   </span>
//                 </button>
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block z-50 border border-gray-100 transition-all duration-200">
//                   <Link
//                     to="/student/profile"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                   >
//                     My Profile
//                   </Link>
//                   <Link
//                     to="/student/settings"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                   >
//                     Settings
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                   >
//                     Sign Out
//                   </button>
//                 </div>
//               </div>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="lg:hidden p-2 rounded-md hover:bg-blue-50 transition-all duration-200"
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="h-6 w-6 text-blue-600" />
//                 ) : (
//                   <Menu className="h-6 w-6 text-blue-600" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           <div className={`lg:hidden transition-all duration-300 ease-in-out ${
//             isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//           } overflow-hidden`}>
//             <div className="py-4 border-t">
//               <form onSubmit={handleSearch} className="mb-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Search courses..."
//                     className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-400"
//                   />
//                   <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                 </div>
//               </form>
//               {/* Add other mobile nav links here if needed */}
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

// export default CertificationPage;

// src/pages/CertificationPage.jsx
import { useState } from "react";
import CertificationDropdown from "@/pages/CertificationDropDown";
import { Button } from "@/components/ui/button";

export default function CertificationPage() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Certifications</h1>
          <Button
            onClick={() => setShowDropdown(true)}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Browse Certifications
          </Button>
        </div>
      </header>

      {/* Optional Description or Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Boost your career</h2>
        <p className="text-gray-600 text-sm">
          Explore top professional certifications across project management, security,
          cloud, and more.
        </p>
      </section>

      {/* Conditional Dropdown */}
      {showDropdown && (
        <CertificationDropdown onMouseLeave={() => setShowDropdown(false)} />
      )}

      {/* Fallback or Static List Section (optional) */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-lg font-bold mb-4 text-gray-700">Why Certifications?</h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm">
          <li>Gain industry-recognized credentials</li>
          <li>Boost your confidence and credibility</li>
          <li>Stay competitive in a growing job market</li>
        </ul>
      </section>
    </div>
  );
}


