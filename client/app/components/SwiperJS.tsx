"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SliderItem } from "../lib/definitions";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const newsItems: SliderItem[] = [
  {
    id: 1,
    title: "চ্যালেঞ্জ ফর ফিউচার",
    subtitle:
      "যেখানে একজন ব্যাক্তি একটি গাছ রোপণ করে তার তিনজন বন্ধুকে গাছ রোপণের চ্যালেঞ্জ করবে।",
    description: "এই ইভেন্টের মধ্য দিয়ে আমরা দুইশো বৃক্ষরোপণে করেছি।.....",
    image: "/images/image6.jpg",
  },
  {
    id: 2,
    title: "ন্যাচারাল ফটোগ্রাফি কনটেস্ট",
    subtitle: "এই ইভেন্টের বিজয়ীদের গাছ প্রদান করা হয়।",
    description: " ...",
    image: "/images/image3.jpg",
  },
  {
    id: 3,
    title: "পরিবেশ দিবসের আলোচনা সভা",
    subtitle:
      "যেখানে চট্টগ্রামের পরিচিত স্বাস্থ্য বিশেষজ্ঞ ও পরিবেশবিদদের আমন্ত্রণ জানানো হয়।",
    description:
      "তারা পরিবেশ দূষণের ফলে স্বাস্থ্যের কি ক্ষতি হচ্ছে, এর থেকে কিভাবে উত্তরণ হওয়া যায়, ওয়ান হেলথ সহ নানাবিধ গুরুত্বপূর্ণ বিষয় নিয়ে তরুণ শিক্ষার্থীদের সাথে খোলামেলা আলোচনা করে।...",
    image: "/images/image13.png",
  },
  {
    id: 4,
    title: "চলো করি বৃক্ষরোপণ, বাচাই আপন ভুবন",
    subtitle:
      "এই ক্যাম্পেইনের মধ্যে দিয়ে এক টাকায় বৃক্ষরোপণ বিভিন্ন শিক্ষা প্রতিষ্ঠানে দুই হাজার গাছ রোপণ ও বিতরণ করে।",
    description: "...",
    image: "/images/image19.jpg",
  },
  {
    id: 5,
    title: "Tree Plantation Campaign 2023",
    subtitle:
      "যেখানে একটি  সুবিধাবঞ্চিত স্কুলের ৫৫ জন শিক্ষার্থীকে গাছ বিতরণ ও গাছের পরিচর্যা বিষয়ে জ্ঞান দেওয়া হবে।",
    description:
      "এছাড়াও এক টাকায় বৃক্ষরোপণ পরিবেশ রক্ষার অংশ হিসেবে বিভিন্ন সামাজিক কাজে অংশ গ্রহণ করে।...",
    image: "/images/image8.jpg",
  },
];

export default function SwiperJS() {
  return (
    <div className="relative w-full px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="py-8"
      >
        {newsItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
              <div className="p-6 flex flex-col h-[320px]">
                <h2 className="text-2xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h2>
                <h3 className="text-lg mb-3 text-gray-700">{item.subtitle}</h3>
                <p className="text-gray-600 text-base flex-grow leading-relaxed">
                  {item.description}
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full font-medium text-lg">
                  বিস্তারিত পড়ুন
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="!w-12 swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition-colors">
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button className="!w-12 swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition-colors">
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
}
