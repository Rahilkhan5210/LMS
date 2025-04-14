// import React, { useEffect, useState } from "react";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Separator } from "@/components/ui/separator";

// const categories = [
//   { id: "nextjs", label: "Next JS" },
//   { id: "data science", label: "Data Science" },
//   { id: "frontend development", label: "Frontend Development" },
//   { id: "fullstack development", label: "Fullstack Development" },
//   { id: "mern stack development", label: "MERN Stack Development" },
//   { id: "backend development", label: "Backend Development" },
//   { id: "javascript", label: "Javascript" },
//   { id: "python", label: "Python" },
//   { id: "docker", label: "Docker" },
//   { id: "mongodb", label: "MongoDB" },
//   { id: "html", label: "HTML" },
// ];

// const Filter = ({ handleFilterChange }) => {
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [sortByPrice, setSortByPrice] = useState("");

//   // ✅ Trigger filter change after state updates
//   useEffect(() => {
//     handleFilterChange(selectedCategories, sortByPrice);
//   }, [selectedCategories, sortByPrice]);

//   const handleCategoryChange = (categoryId) => {
//     setSelectedCategories((prevCategories) =>
//       prevCategories.includes(categoryId)
//         ? prevCategories.filter((id) => id !== categoryId)
//         : [...prevCategories, categoryId]
//     );
//   };

//   const selectByPriceHandler = (selectedValue) => {
//     setSortByPrice(selectedValue);
//   };

//   return (
//     <div className=" mt-0 w-full md:w-[20%]">
//       <div className="flex items-center justify-between">
//         <h1 className="font-semibold text-lg md:text-xl">Filter Options</h1>
//         <Select onValueChange={selectByPriceHandler}>
//           <SelectTrigger>
//             <SelectValue placeholder="Sort by" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               <SelectLabel>Sort by price</SelectLabel>
//               <SelectItem value="low">Low to High</SelectItem>
//               <SelectItem value="high">High to Low</SelectItem>
//             </SelectGroup>
//           </SelectContent>
//         </Select>
//       </div>
//       <Separator className="my-4" />
//       <div>
//         <h1 className="font-semibold mb-2">CATEGORY</h1>
//         {categories.map((category) => (
//           <div key={category.id} className="flex items-center space-x-2 my-2">
//             <Checkbox
//               id={category.id}
//               onCheckedChange={() => handleCategoryChange(category.id)}
//             />
//             <Label
//               htmlFor={category.id}
//               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             >
//               {category.label}
//             </Label>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Filter;

// new code
import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { id: "nextjs", label: "Next JS" },
  { id: "data science", label: "Data Science" },
  { id: "frontend development", label: "Frontend Development" },
  { id: "fullstack development", label: "Fullstack Development" },
  { id: "mern stack development", label: "MERN Stack Development" },
  { id: "backend development", label: "Backend Development" },
  { id: "javascript", label: "Javascript" },
  { id: "python", label: "Python" },
  { id: "docker", label: "Docker" },
  { id: "mongodb", label: "MongoDB" },
  { id: "html", label: "HTML" },
];

const Filter = ({ handleFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortByPrice, setSortByPrice] = useState("");

  useEffect(() => {
    handleFilterChange(selectedCategories, sortByPrice);
  }, [selectedCategories, sortByPrice]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const selectByPriceHandler = (value) => {
    setSortByPrice(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full md:w-[22%] bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all"
    >
      <div className=" flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <SlidersHorizontal className="text-blue-600" size={22} /> Filters
        </h1>

        <Select onValueChange={selectByPriceHandler}>
          <SelectTrigger className="w-36 h-9 border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-zinc-800 hover:shadow-md transition">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-gray-500">Sort by price</SelectLabel>
              <SelectItem value="low">Low to High</SelectItem>
              <SelectItem value="high">High to Low</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4 rounded-full" />

      <div>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
          Categories
        </h2>

        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scroll">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center space-x-2 group px-2 py-1 rounded-md transition-all hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-zinc-800 dark:hover:to-zinc-700"
            >
              <Checkbox
                id={category.id}
                onCheckedChange={() => handleCategoryChange(category.id)}
              />
              <Label
                htmlFor={category.id}
                className="text-sm font-medium text-gray-800 dark:text-gray-300 cursor-pointer"
              >
                {category.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Filter;

