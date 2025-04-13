import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/ui/Navbar/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Header from '@/pages/Students/Header';
const MainLayout = () => {
  return (
    <>
      
      {/* Navbar below header, still fixed */}
      <Navbar />

      {/* Main content (with padding-top to account for fixed navbar height) */}
      <div className="bg-gray-50 dark:bg-[#0f172a] min-h-screen flex flex-col justify-between">
        <main className="pt-[7.5rem] px-4 md:px-8 lg:px-16 flex-grow transition-all duration-300">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Outlet />
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
};
export default MainLayout;