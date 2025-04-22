import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { certificates } from "@/assets/frontend_assets/assets";
import { Menu, Search, Clock, X, Check } from "lucide-react";

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

// Reverse mapping for easier lookup
const REVERSE_CATEGORY_MAPPING = Object.entries(CATEGORY_TITLES).reduce((acc, [id, title]) => {
  acc[title] = id;
  return acc;
}, {});

const CertificationListing = () => {
  const [certData, setCertData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(["pro_management"]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        setCertData(certificates);
      } catch (err) {
        setError("Failed to load certifications. Please try again later.");
        console.error("Error fetching certifications:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get all certifications from selected categories and add category information
  const getAllCertifications = () => {
    const allCerts = [];
    selectedCategories.forEach(categoryId => {
      const certs = certifications[categoryId] || [];
      certs.forEach(cert => {
        allCerts.push({
          ...cert,
          categoryId: categoryId // Store the category ID with each certification
        });
      });
    });
    return allCerts;
  };

  const toggleCategory = (categoryId) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        // If it's the last selected category, don't remove it
        // if (prev.length === 1) return prev;
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        {error}
      </div>
    );
  }

  const certifications = certData[0] || {};

  // Use the new getAllCertifications function
  const filteredCerts = getAllCertifications().filter(cert =>
    cert?.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10 -mt-20">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-500 mb-6 px-4 leading-tight">
         All Certifications – Only at Learnlofts
</h1>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Filter Header */}
        <div className="lg:hidden flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Certifications</h1>
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
          >
            <Menu className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>

        {/* Mobile Selected Categories */}
        {selectedCategories.length > 0 && (
          <div className="lg:hidden mb-4">
            <div className="flex flex-wrap gap-2">
              {selectedCategories.map(categoryId => (
                <div 
                  key={categoryId}
                  className="flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm cursor-pointer"
                >
                  {CATEGORY_TITLES[categoryId]}
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleCategory(categoryId);
                    }}
                    className="ml-2 text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Mobile Overlay */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={() => setSidebarOpen(false)}
              ></div>
              <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl overflow-y-auto">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Filter Certifications</h2>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="p-1 rounded-full hover:bg-gray-100"
                      
                    >
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>

                  <div className="mb-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search certifications..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wider">Categories</h3>
                    <div className="space-y-2">
                      {Object.entries(CATEGORY_TITLES).map(([id, name]) => (
                        <label
                          key={id}
                          className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-colors ${selectedCategories.includes(id)
                              ? "bg-blue-50 text-blue-700"
                              : "hover:bg-gray-50"
                            }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(id)}
                            onChange={() => toggleCategory(id)}
                            className="hidden"
                          />
                          <div className={`w-5 h-5 rounded border flex items-center justify-center mr-3 ${selectedCategories.includes(id)
                              ? "bg-blue-600 border-blue-600"
                              : "border-gray-300"
                            }`}>
                            {selectedCategories.includes(id) && (
                              <Check className="h-4 w-4 text-white" />
                            )}
                          </div>
                          <span className="text-sm">{name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sidebar - Desktop */}
          <div className="hidden lg:block lg:w-72 bg-white rounded-xl shadow-sm overflow-hidden sticky top-24 h-fit">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Filter Certifications
                {selectedCategories.length > 0 && (
                  <span className="text-sm font-normal text-gray-500 block mt-1">
                    {selectedCategories.length} selected
                  </span>
                )}
              </h2>

              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search certifications..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wider">Categories</h3>
                <div className="space-y-2">
                  {Object.entries(CATEGORY_TITLES).map(([id, name]) => (
                    <label
                      key={id}
                      className={`flex items-center px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${selectedCategories.includes(id)
                          ? "bg-blue-50 text-blue-700"
                          : "hover:bg-gray-50"
                        }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(id)}
                        onChange={() => toggleCategory(id)}
                        className="hidden"
                      />
                      <div className={`w-5 h-5 rounded border flex items-center justify-center mr-3 ${selectedCategories.includes(id)
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-300"
                        }`}>
                        {selectedCategories.includes(id) && (
                          <Check className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span className="text-sm">{name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Desktop Header */}
            <div className="hidden lg:block mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {selectedCategories.length === 1 
                      ? CATEGORY_TITLES[selectedCategories[0]]
                      : "Selected Categories"}
                  </h1>
                  <p className="mt-2 text-gray-600">
                    {filteredCerts.length} {filteredCerts.length === 1 ? 'certification' : 'certifications'} found
                  </p>
                  {/* Add selected category chips */}
                  {selectedCategories.length > 1 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selectedCategories.map(categoryId => (
                        <div 
                          key={categoryId}
                          className="flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm cursor-pointer"
                        >
                          {CATEGORY_TITLES[categoryId]}
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              toggleCategory(categoryId);
                            }}
                            className="ml-2 text-blue-600 hover:text-blue-800 cursor-pointer"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  Showing {filteredCerts.length} of {Object.values(certifications).flat().length} total
                </div>
              </div>
            </div>

            {/* Certifications Grid */}
            {filteredCerts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCerts.map((cert) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={`/student/certification/${cert.categoryId}/${cert.id}`}
                      className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full"
                    >
                      <div className="p-6 h-full flex flex-col">
                        <div className="flex gap-4 mb-4">
                          <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                            {cert.image?.[0] ? (
                              <img
                                src={cert.image[0]}
                                alt={cert.title}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <div className="text-gray-400 text-xs text-center p-2">No Image</div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                              {cert.title}
                            </h3>
                            {cert.category && (
                              <span className="inline-block mt-1 px-2 py-2 text-xs font-medium bg-blue-100  text-blue-800 rounded-full">
                                {CATEGORY_TITLES[cert.category] || cert.category}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">
                          {cert.description}
                        </p>
                        <div className="flex flex-wrap justify-between items-center mt-auto">
                          <span className="text-lg font-semibold text-blue-600">
                            ${cert.price}
                          </span>
                          <div className="flex items-center text-sm text-blue-600">
                            <Clock className="h-4 w-4 mr-1.5" />
                            {cert.duration}
                          </div>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">Read More</button>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <div className="mx-auto max-w-md">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No certifications found</h3>
                  <p className="text-gray-500 mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategories(Object.keys(CATEGORY_TITLES));
                      setSearchQuery("");
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Reset all filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationListing;