"use client";

import React from "react";
import { motion } from "framer-motion";
import { galleryImages } from "../../utils/constants";

interface GalleryImage {
  src: string;
  alt: string;
}

const GalleryImage: React.FC<GalleryImage & { className?: string }> = ({
  src,
  alt,
  className,
}) => (
  <motion.figure
    className={`gallery-img ${className || ""}`}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <img src={src} alt={alt} />
  </motion.figure>
);

const Best: React.FC = () => {
  return (
    <section className="best-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <motion.div
              className="section-heading"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h5
                className="dash-style"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                OUR TOUR GALLERY
              </motion.h5>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                BEST TRAVELER'S SHARED PHOTOS
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Aperiam sociosqu urna praesent, tristique, corrupti condimentum
                asperiores platea ipsum ad arcu. Nostrud. Esse? Aut nostrum,
                ornare quas provident laoreet nesciunt odio voluptates etiam,
                omnis.
              </motion.p>
            </motion.div>
            <GalleryImage
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
            />
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-sm-6">
                <GalleryImage
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                />
              </div>
              <div className="col-sm-6">
                <GalleryImage
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <GalleryImage
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  className="mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Best;
