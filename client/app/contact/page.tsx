"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { FormData } from "@/app/lib/definitions";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto mt-20 px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl font-bold text-center mb-12"
        variants={itemVariants}
      >
        যোগাযোগ
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.div
            className="bg-white shadow-md rounded-lg p-6"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <motion.div
                className="flex items-start space-x-3"
                variants={itemVariants}
              >
                <MapPin className="w-5 h-5 mt-1 text-orange-500" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    ব্লক ২, হাজী আবুল কালাম ভবনের নিচ তলা,হাটহাজারী, চট্টগ্রাম
                    বিশ্ববিদ্যালয়
                  </p>
                  <p className="text-gray-600">চট্টগ্রাম</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3"
                variants={itemVariants}
              >
                <Phone className="w-5 h-5 mt-1 text-orange-500" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">018-4304-8666</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3"
                variants={itemVariants}
              >
                <Mail className="w-5 h-5 mt-1 text-orange-500" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">ektakaybrikkhoropon@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="w-full h-[300px] rounded-lg overflow-hidden"
            variants={itemVariants}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.6516871643726!2d91.86445077605921!3d22.404484639109626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad27003abc8e47%3A0x8dd8a8fcce531ee7!2sAbul%20kalam%20bhobon!5e0!3m2!1sen!2sbd!4v1732029650064!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          variants={itemVariants}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <motion.div className="space-y-2" variants={itemVariants}>
              <label htmlFor="name" className="block font-medium">
                Your Name
              </label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <label htmlFor="email" className="block font-medium">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <label htmlFor="message" className="block font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[150px] transition-all duration-300 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your message"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
          {isSubmitted && (
            <motion.div
              className="mt-4 p-2 bg-green-100 text-green-700 rounded-md text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              Thank you for your message! We&apos;ll get back to you soon.
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
