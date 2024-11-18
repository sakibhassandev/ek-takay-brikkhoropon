"use client";

import React, { useCallback, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { ImageModalProps } from "../lib/definitions";

const ImageModal: React.FC<ImageModalProps> = ({
  imageUrl,
  onClose,
  currentIndex,
  totalImages,
  onPrevious,
  onNext,
}) => {
  const handleClickOutside = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrevious, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      onClick={handleClickOutside}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        aria-label="Close modal"
      >
        <X size={32} />
      </button>

      <button
        onClick={onPrevious}
        className="absolute left-4 text-white hover:text-gray-300 text-4xl font-bold transition-colors"
        disabled={currentIndex === 0}
      >
        ‹
      </button>

      <div className="relative max-w-7xl max-h-[90vh] mx-4">
        <Image
          src={imageUrl}
          alt="Enlarged view"
          className="max-h-[90vh] max-w-full object-contain"
          width={800}
          height={800}
        />
        <div className="absolute bottom-4 left-0 right-0 text-center text-white">
          {currentIndex + 1} / {totalImages}
        </div>
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 text-white hover:text-gray-300 text-4xl font-bold transition-colors"
        disabled={currentIndex === totalImages - 1}
      >
        ›
      </button>
    </div>
  );
};

export default ImageModal;
