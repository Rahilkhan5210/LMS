import { Award, Clock, ChevronRight, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
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
  SAP_Certified_Associate:"SAP Certifications",
};

export default function CertificationDropdown({ onMouseLeave }) {
  const [certData, setCertData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("pro_management");
  const dropdownRef = useRef(null);
  const [isHovering, setIsHovering] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setCertData(certificates);
    setLoading(false);

    // Add click event listener to handle clicks outside and on navigation
    const handleClick = (e) => {
      if (e.target.closest('a[href="/login"]') || 
          e.target.closest('a[href="/signup"]') ||
          e.target.closest('button[type="button"]')) {
        setIsHovering(false);
        onMouseLeave();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [onMouseLeave]);

  const handleMouseLeave = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget)) {
      setIsHovering(false);
      onMouseLeave();
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleCardClick = (cert) => {
    setIsHovering(false);
    onMouseLeave();
    navigate(`/student/certification/${selectedCategory}/${cert.id}`);
  };

  const certifications = certData.length > 0 ? certData[0] : {};
  
  console.log("Selected Category:", selectedCategory);
  console.log("Available Categories:", Object.keys(certifications));
  console.log("Certifications for category:", certifications[selectedCategory]);

  const filteredCerts =
    certifications[selectedCategory]?.filter((cert) =>
      cert?.title?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  if (!isHovering) return null;

  return (
    <div 
      className="fixed inset-0 z-40" 
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
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
                      onClick={() => handleCardClick(cert)}
                    >
                      <div
                        className="block p-4 rounded-lg border border-gray-100 bg-white transition-all hover:shadow-md cursor-pointer"
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
                              <span className="text-blue-600 font-bold">Price: ${cert.price}</span>
                              <span className="text-gray-300 hidden sm:inline">|</span>
                              <div className="flex items-center text-gray-600">
                                <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                                {cert.duration || "4 weeks"}
                                <span className="text-blue-600 text-sm font-bold ml-2 curser-pointer">
                                Read More
                              </span>
                              </div>
                              
                            </div>
                          </div>
                         
                        </div>
                      </div>
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
            <div
              onClick={() => {
                setIsHovering(false);
                onMouseLeave();
                navigate("/student/certifications");
              }}
              className="flex items-center justify-between text-blue-600 text-sm cursor-pointer"
            >
              <button className="font-semibold py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
                Explore All Programs
              </button>
              <ChevronRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
