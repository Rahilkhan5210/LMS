import { blogData } from "./Students/BlogsData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Search, Tag, ChevronRight, BookOpen } from "lucide-react";
import { useState } from "react";

function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(blogData.map(blog => blog.category))];

  const filteredBlogs = blogData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="-mt-14 min-h-screen w-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">LearnLofts Blog</h1>
            <p className="text-md md:text-xl text-blue-100 mb-8">
              Discover insights, tutorials, and trends in technology and programming
            </p>
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-black/10 border border-black/20 text-black placeholder-white focus:outline-none focus:border-blue-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full text-sm px-4 py-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  {/* Author Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={blog.author.avatar}
                      alt={blog.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{blog.author.name}</h3>
                      <p className="text-sm text-gray-600">{blog.author.role}</p>
                    </div>
                  </div>

                  {/* Blog Details */}
                  <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.description}
                  </p>

                  {/* Blog Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {blog.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      {blog.date}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <Button
                    variant="ghost"
                    className="mt-auto w-full flex items-center justify-center gap-2 hover:bg-blue-50 text-blue-600"
                  >
                    Read More <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsPage;
