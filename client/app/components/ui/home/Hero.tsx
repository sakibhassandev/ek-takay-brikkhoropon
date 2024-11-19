"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CustomButton from "@/app/components/CustomButton";
import StatsBoxes from "../../StatsBoxes";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Children in classroom"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col mt-20">
        <div className="container mx-auto px-4 flex-1 flex flex-col justify-center items-center text-center text-white py-16">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Give One Taka Daily,
            <br />
            Change Bangladesh
            <br />
            Gradually
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            supported by people who love to help others.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CustomButton>Donate Us</CustomButton>
          </motion.div>
        </div>
      </div>

      {/* Stats Boxes */}
      <StatsBoxes />
    </div>
  );
};

export default Hero;
