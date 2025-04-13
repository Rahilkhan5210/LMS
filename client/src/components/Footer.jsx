// import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, ArrowRight, Check } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { useState } from "react";
// import { toast } from "sonner";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();
//   const [email, setEmail] = useState("");
//   const [isSubscribing, setIsSubscribing] = useState(false);
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   const handleSubscribe = async (e) => {
//     e.preventDefault();
//     if (!email) {
//       toast.error("Please enter your email address");
//       return;
//     }
    
//     setIsSubscribing(true);
//     // Simulate API call
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       setIsSubscribed(true);
//       toast.success("Successfully subscribed to newsletter!");
//       setEmail("");
//     } catch (error) {
//       toast.error("Failed to subscribe. Please try again.");
//     } finally {
//       setIsSubscribing(false);
//     }
//   };

//   return (
//     <footer className="relative">
//       {/* Background gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black opacity-95 pointer-events-none" />

//       {/* Newsletter Section */}
//       <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 border-t-4 border-blue-500">
//         <div className="container mx-auto px-4 py-12">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="text-center md:text-left">
//               <h3 className="text-2xl font-bold mb-2 animate-fade-in text-white">
//                 Subscribe to Our Newsletter
//               </h3>
//               <p className="text-blue-100">
//                 Stay updated with our latest courses and educational insights
//               </p>
//             </div>
//             <div className="w-full md:w-auto">
//               <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
//                 <div className="relative">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white transition-all duration-200 w-full sm:w-64 hover:bg-white/20 text-white placeholder:text-blue-100"
//                   />
//                   {isSubscribed && (
//                     <div className="absolute right-3 top-1/2 -translate-y-1/2">
//                       <Check className="h-5 w-5 text-green-400" />
//                     </div>
//                   )}
//                 </div>
//                 <Button 
//                   type="submit"
//                   disabled={isSubscribing}
//                   className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg hover:shadow-xl"
//                 >
//                   {isSubscribing ? (
//                     "Subscribing..."
//                   ) : (
//                     <>
//                       Subscribe
//                       <ArrowRight className="h-4 w-4" />
//                     </>
//                   )}
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Content */}
//       <div className="relative bg-gradient-to-b from-gray-900 to-black">
//         <div className="container mx-auto px-4 py-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* About Section */}
//             <div className="transform transition-all duration-300 hover:translate-y-[-5px]">
//               <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
//                 About LearnLofts
//               </h4>
//               <p className="text-gray-400 mb-4">
//                 Empowering learners worldwide with quality education and professional development opportunities.
//               </p>
//               <div className="flex space-x-4">
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
//                   className="text-gray-400 hover:text-blue-400 transition-all duration-200 transform hover:scale-110">
//                   <Facebook className="h-5 w-5" />
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-blue-400 transition-all duration-200 transform hover:scale-110">
//                   <Twitter className="h-5 w-5" />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-pink-400 transition-all duration-200 transform hover:scale-110">
//                   <Instagram className="h-5 w-5" />
//                 </a>
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-blue-400 transition-all duration-200 transform hover:scale-110">
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div className="transform transition-all duration-300 hover:translate-y-[-5px]">
//               <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
//                 Quick Links
//               </h4>
//               <ul className="space-y-2">
//                 {[
//                   { to: "/student/courses", text: "Explore Courses" },
//                   { to: "/student/about", text: "About Us" },
//                   { to: "/student/blogs", text: "Blog" },
//                   { to: "/student/contact", text: "Contact" },
//                   { to: "/student/faq", text: "FAQ" }
//                 ].map((link) => (
//                   <li key={link.to}>
//                     <Link 
//                       to={link.to} 
//                       className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
//                     >
//                       <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
//                       {link.text}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Support */}
//             <div className="transform transition-all duration-300 hover:translate-y-[-5px]">
//               <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
//                 Support
//               </h4>
//               <ul className="space-y-2">
//                 {[
//                   { to: "/student/help", text: "Help Center" },
//                   { to: "/student/terms", text: "Terms of Service" },
//                   { to: "/student/privacy", text: "Privacy Policy" },
//                   { to: "/student/certification", text: "Certification" }
//                 ].map((link) => (
//                   <li key={link.to}>
//                     <Link 
//                       to={link.to} 
//                       className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
//                     >
//                       <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
//                       {link.text}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact Info */}
//             <div className="transform transition-all duration-300 hover:translate-y-[-5px]">
//               <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
//                 Contact Us
//               </h4>
//               <ul className="space-y-4">
//                 <li className="flex items-start space-x-3 group hover:text-white transition-all duration-200">
//                   <MapPin className="h-5 w-5 text-gray-400 mt-1 group-hover:text-blue-400" />
//                   <span className="text-gray-400 group-hover:text-white">
//                     123 Education Street,<br />
//                     Learning City, 12345
//                   </span>
//                 </li>
//                 <li className="group">
//                   <a href="tel:+1234567890" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-200">
//                     <Phone className="h-5 w-5 group-hover:text-blue-400" />
//                     <span>+1 (234) 567-890</span>
//                   </a>
//                 </li>
//                 <li className="group">
//                   <a href="mailto:info@learnlofts.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-200">
//                     <Mail className="h-5 w-5 group-hover:text-blue-400" />
//                     <span>info@learnlofts.com</span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Bottom Bar */}
//           <div className="border-t border-gray-800 mt-12 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <p className="text-gray-400 text-sm mb-4 md:mb-0">
//                 © {currentYear} LearnLofts. All rights reserved.
//               </p>
//               <div className="flex space-x-6">
//                 {[
//                   { to: "/student/terms", text: "Terms" },
//                   { to: "/student/privacy", text: "Privacy" },
//                   { to: "/student/cookies", text: "Cookies" }
//                 ].map((link) => (
//                   <Link
//                     key={link.to}
//                     to={link.to}
//                     className="text-gray-400 hover:text-white text-sm transition-all duration-200 hover:underline"
//                   >
//                     {link.text}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// } 

// new code
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  ArrowRight,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubscribing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="w-full bg-black text-white relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black opacity-95 pointer-events-none z-0" />

      {/* Newsletter Section */}
      <div className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 border-t-4 border-blue-500">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-white animate-fade-in">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-blue-100 text-sm sm:text-base">
                Stay updated with our latest courses and educational insights
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 items-center"
              >
                <div className="relative w-full sm:w-64">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white transition-all duration-200 w-full text-white placeholder:text-blue-100"
                  />
                  {isSubscribed && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Check className="h-5 w-5 text-green-400" />
                    </div>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg hover:shadow-xl px-4 py-2"
                >
                  {isSubscribing ? (
                    "Subscribing..."
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 bg-gradient-to-b from-gray-900 to-black w-full">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About Section */}
            <div className="transition-transform duration-300 hover:-translate-y-1">
              <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                About LearnLofts
              </h4>
              <p className="text-gray-400 mb-4 text-sm">
                Empowering learners worldwide with quality education and professional development opportunities.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
                    aria-label={`Follow us on ${Icon.name}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="transition-transform duration-300 hover:-translate-y-1">
              <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                {[{ to: "/student/courses", text: "Explore Courses" }, { to: "/student/about", text: "About Us" }, { to: "/student/blogs", text: "Blog" }, { to: "/student/contact", text: "Contact" }, { to: "/student/faq", text: "FAQ" }].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="transition-transform duration-300 hover:-translate-y-1">
              <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Support
              </h4>
              <ul className="space-y-2 text-sm">
                {[{ to: "/student/help", text: "Help Center" }, { to: "/student/terms", text: "Terms of Service" }, { to: "/student/privacy", text: "Privacy Policy" }, { to: "/student/certification", text: "Certification" }].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="transition-transform duration-300 hover:-translate-y-1">
              <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Contact Us
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3 group hover:text-white transition-all duration-200">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1 group-hover:text-blue-400" />
                  <span className="text-gray-400 group-hover:text-white">
                    123 Education Street,<br />
                    Learning City, 12345
                  </span>
                </li>
                <li className="group">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-200"
                  >
                    <Phone className="h-5 w-5 group-hover:text-blue-400" />
                    <span>+1 (234) 567-890</span>
                  </a>
                </li>
                <li className="group">
                  <a
                    href="mailto:info@learnlofts.com"
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-200"
                  >
                    <Mail className="h-5 w-5 group-hover:text-blue-400" />
                    <span>info@learnlofts.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} LearnLofts. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {[{ to: "/student/terms", text: "Terms" }, { to: "/student/privacy", text: "Privacy" }].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-400 hover:text-white transition-all duration-200"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



