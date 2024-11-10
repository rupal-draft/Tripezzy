import React from "react";
import { motion } from "framer-motion";

const GallerySection: React.FC = () => {
  const images = [28, 29, 32, 33];

  return (
    <motion.div
      className="single-tour-gallery"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        GALLERY / PHOTOS
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((num, index) => (
          <motion.div
            key={num}
            className="single-tour-item overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.figure
              className="feature-image relative aspect-w-4 aspect-h-3"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={`/assets/images/img${num}.jpg`}
                alt={`Gallery image ${num}`}
                className="rounded-lg"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              >
                <motion.span
                  className="text-white text-lg font-semibold"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  View Image
                </motion.span>
              </motion.div>
            </motion.figure>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GallerySection;
