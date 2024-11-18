"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Camera } from "lucide-react";
import ImageModal from "../../ImageModal";

const images = [
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image9.jpg",
  "/images/image10.jpg",
  "/images/image12.jpg",
  "/images/image13.png",
  "/images/image14.jpg",
  "/images/image15.jpg",
  "/images/image16.jpg",
  "/images/image17.jpg",
  "/images/image18.jpg",
  "/images/image19.jpg",
  "/images/image20.jpg",
  "/images/image21.jpg",
  "/images/image23.jpg",
  "/images/image24.jpg",
  "/images/image25.jpg",
  "/images/image26.jpg",
  "/images/image27.jpg",
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const newIndex =
      direction === "prev"
        ? Math.max(0, selectedImage - 1)
        : Math.min(images.length - 1, selectedImage + 1);

    setSelectedImage(newIndex);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Camera className="w-8 h-8 mr-3 text-indigo-600" />
          <h1 className="text-4xl font-bold text-gray-800">গ্যালারি</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3] cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => openModal(index)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                fill
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <ImageModal
          imageUrl={images[selectedImage]}
          onClose={closeModal}
          currentIndex={selectedImage}
          totalImages={images.length}
          onPrevious={() => navigateImage("prev")}
          onNext={() => navigateImage("next")}
        />
      )}
    </div>
  );
};
