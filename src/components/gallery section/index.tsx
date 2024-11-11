"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const images = [28, 29, 32, 33];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const buttonStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(255, 255, 255, 0.5)",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <motion.div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "24px",
          textAlign: "center",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        GALLERY / PHOTOS
      </motion.h3>
      <div
        style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <img
              src={`/assets/images/img${images[currentIndex]}.jpg`}
              alt={`Gallery image ${images[currentIndex]}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </motion.div>
        </AnimatePresence>
        <button
          style={{ ...buttonStyle, left: "16px" }}
          onClick={prevSlide}
          aria-label="Previous image"
        >
          <ChevronLeft />
        </button>
        <button
          style={{ ...buttonStyle, right: "16px" }}
          onClick={nextSlide}
          aria-label="Next image"
        >
          <ChevronRight />
        </button>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
      >
        {images.map((_, index) => (
          <motion.div
            key={index}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "#3b82f6" : "#d1d5db",
              margin: "0 4px",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.2 }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </motion.div>
  );
}
