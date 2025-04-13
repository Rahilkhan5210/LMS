// // src/components/CertificationDropdownTrigger.jsx
// import { useState, useRef } from "react";
// import CertificationPage from "./CertificationPage";

// export default function CertificationDropdown() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const timeoutRef = useRef(null);

//   const handleMouseEnter = () => {
//     clearTimeout(timeoutRef.current);
//     setShowDropdown(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setShowDropdown(false);
//     }, 200); // Delay to allow smooth transition
//   };

//   return (
//     <div
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="relative"
//     >
//       <span className="cursor-pointer text-white px-4 py-2 hover:underline">
//         Certificate
//       </span>

//       {showDropdown && (
//         <div className="absolute top-full left-1/2 -translate-x-1/2 z-50">
//           <CertificationPage />
//         </div>
//       )}
//     </div>
//   );
// }

// new code

import { Award, Clock, ChevronRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { certificates } from "@/assets/frontend_assets/assets";

const CATEGORY_TITLES = {
  pro_management: "Project Management",
  information_security: "Information Security",
  quality_management: "Quality Management",
  networking_certifications: "Networking Certifications",
  cyber_security: "Cyber Security",
  scrum_agile: "Scrum & Agile",
  microsoft_certifications: "Microsoft Certifications",
  amazon_web_services: "Amazon Web Services",
};

export default function CertificationDropdown({ onMouseLeave }) {
  const [certData, setCertData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("pro_management");
  const dropdownRef = useRef(null);

  useEffect(() => {
    setCertData(certificates);
    setLoading(false);
  }, []);

  const handleMouseLeave = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget)) {
      onMouseLeave();
    }
  };

  const certifications = certData.length > 0 ? certData[0] : {};
  const filteredCerts =
    certifications[selectedCategory]?.filter((cert) =>
      cert?.title?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <div className="fixed inset-0 z-40" onMouseLeave={handleMouseLeave}>
      {/* Backdrop */}
      <div className="absolute top-[80px] inset-x-0 bottom-0 bg-black/5" />

      {/* Dropdown Content */}
      <motion.div
        ref={dropdownRef}
        className="fixed top-[80px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[1400px] bg-white rounded-xl shadow-lg border border-gray-100 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="p-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Category List */}
            <div className="w-full md:w-64 lg:w-72 md:border-r border-gray-100 md:pr-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Categories</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                {Object.entries(CATEGORY_TITLES).map(([id, name]) => (
                  <button
                    key={id}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === id
                        ? "bg-blue-50 text-blue-600 shadow-sm ring-2 ring-blue-100"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedCategory(id)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Certification List */}
            <div className="flex-1 min-w-0">
              <div className="mb-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {CATEGORY_TITLES[selectedCategory]}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm">
                      Browse professional certifications
                    </p>
                  </div>
                  <div className="relative w-full sm:w-64">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Certification Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[350px] overflow-y-auto px-2">
                {filteredCerts.length > 0 ? (
                  filteredCerts.map((cert) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="mx-auto w-full max-w-sm"
                    >
                      <Link
                        to={`/student/certification/${cert.category}/${cert.id}`}
                        className="block p-4 rounded-lg border border-gray-100 bg-white transition-all hover:shadow-md"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-50">
                            {cert.image?.[0] && (
                              <img
                                src={cert.image[0]}
                                alt={cert.title}
                                className="w-full h-full object-contain rounded-lg"
                              />
                            )}
                          </div>
                          <div className="flex-1 min-w-0 relative z-10">
                            <h4 className="font-semibold text-gray-900 line-clamp-2 text-sm sm:text-base">
                              {cert.title}
                            </h4>
                            <p className="mt-1 text-gray-600 text-xs line-clamp-2">
                              {cert.description}
                            </p>
                            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                              <span className="text-blue-600 font-bold">${cert.price}</span>
                              <span className="text-gray-300 hidden sm:inline">|</span>
                              <div className="flex items-center text-gray-600">
                                <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                                {cert.duration || "4 weeks"}
                              </div>
                            </div>
                          </div>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <ChevronRight className="h-5 w-5 text-blue-600" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-1 sm:col-span-2 text-center py-8 text-gray-500 text-sm">
                    No certifications found.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer Link */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <Link
              to="/student/certification"
              className="flex items-center justify-between text-blue-600 text-sm"
            >
              <span className="font-semibold">Explore All Programs</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

