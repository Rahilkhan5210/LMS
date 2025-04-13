import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Target,
  Sparkles,
} from "lucide-react";

export default function About() {
  return (
    <div className="w-full -mt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About LearnLofts
            </h1>
            <p className="text-lg sm:text-xl text-blue-100">
              Empowering learners worldwide with quality education and innovative
              learning solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            {[
              {
                title: "Our Mission",
                text: "To provide accessible, high-quality education that empowers individuals to achieve their professional goals and make a positive impact in their communities.",
              },
              {
                title: "Our Vision",
                text: "To become the leading global platform for online education, fostering a community of lifelong learners and innovative educators.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300"
              >
                <h2 className="text-2xl font-bold mb-4 text-blue-600">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose LearnLofts?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
                title: "Expert Instructors",
                description:
                  "Learn from industry professionals and experienced educators.",
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Community Learning",
                description:
                  "Connect with peers and engage in collaborative learning experiences.",
              },
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: "Certified Courses",
                description: "Earn recognized certificates upon course completion.",
              },
              {
                icon: <BookOpen className="h-8 w-8 text-blue-600" />,
                title: "Comprehensive Content",
                description: "Access detailed course materials and resources.",
              },
              {
                icon: <Target className="h-8 w-8 text-blue-600" />,
                title: "Flexible Learning",
                description: "Learn at your own pace with 24/7 course access.",
              },
              {
                icon: <Sparkles className="h-8 w-8 text-blue-600" />,
                title: "Interactive Learning",
                description:
                  "Engage with dynamic content and hands-on projects.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Students" },
              { number: "500+", label: "Courses" },
              { number: "100+", label: "Instructors" },
              { number: "50+", label: "Countries" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
              },
              {
                name: "Sarah Johnson",
                role: "Head of Education",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
              },
              {
                name: "Michael Chen",
                role: "Technical Director",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
