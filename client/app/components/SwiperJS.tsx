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
    title: "বিজয়ের সুবর্ণজয়ন্তীতে হাসুক ওরাও",
    subtitle: "হাইলাজারী উপজেলার মহামানদাস",
    description: "ইউনিয়নের একটি প্রত্যন্ত ...",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "মাদ্রাসা ইভেন্ট : নূরে মদিনা নাছিরিয়া",
    subtitle: "হাফেজিয়া মাদ্রাসা ও এতিমখানা",
    description: "মাদ্রাসার বার্ষিক অনুষ্ঠান ...",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "১ টাকায় শিক্ষা ভলান্টিয়ার রিক্রুটমেন্ট",
    subtitle: "শিক্ষা কার্যক্রম",
    description: "'এক টাকার শিক্ষা' আলোকিত মানুষ তৈরিতে কাজ করে। যা...",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "হাসবে সবাই, ঈদ আনন্দে ২০২৩",
    subtitle: "বছর ঘুরে ঈদ এসেছে",
    description: "কিন্তু তুমি কি সবসময় আসো? করো ...",
    image:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&auto=format&fit=crop",
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
                  objectFit="cover"
                  fill
                />
              </div>
              <div className="p-6 flex flex-col h-[292px]">
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
