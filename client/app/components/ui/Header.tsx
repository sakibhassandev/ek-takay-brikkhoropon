"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    name: "Donate",
    link: "/donate",
  },
  {
    name: "মূল পাতা",
    link: "/",
  },
  {
    name: "আমাদের গল্প",
    link: "/our-story",
  },
  {
    name: "ইভেন্টসমূহ",
    link: "/events",
  },
  {
    name: "সংগ্রহ",
    link: "/collections",
  },
  {
    name: "ব্যয়",
    link: "/expenses",
  },
  {
    name: "যোগাযোগ",
    link: "/contact",
  },
  {
    name: "যুক্ত হোন",
    link: "/join",
  },
  {
    name: "লগইন",
    link: "/login",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`${item.link}`}
                    className="text-white hover:text-orange-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <button
              className="lg:hidden text-white p-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <button
                  className="text-white p-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
                  onClick={toggleMobileMenu}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-grow">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="w-full text-center"
                  >
                    <Link
                      href={`${item.link}`}
                      className="text-white text-2xl py-3 block hover:text-orange-500 transition-colors"
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
