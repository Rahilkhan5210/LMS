import { useState } from "react";
import CertificationDropdown from "@/pages/CertificationDropDown";
import { Button } from "@/components/ui/button";

export default function CertificationPage() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="-mt-5 min-h-screen bg-gray-500">
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

      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Boost your career</h2>
        <p className="text-gray-600 text-sm">
          Explore top professional certifications across project management, security,
          cloud, and more.
        </p>
      </section>

      {showDropdown && (
        <CertificationDropdown onMouseLeave={() => setShowDropdown(false)} />
      )}

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
