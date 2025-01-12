"use client";

import React from "react";
import { motion } from "framer-motion";
import { specialOffers } from "../../utils/constants";

interface SpecialOffer {
  image: string;
  discount: number;
  location: string;
  title: string;
  originalPrice: number;
  discountedPrice: number;
}

const SpecialOfferCard: React.FC<SpecialOffer> = ({
  image,
  discount,
  location,
  title,
  originalPrice,
  discountedPrice,
}) => (
  <motion.div
    className="col-md-6 col-lg-4"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="special-item"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <figure className="special-img">
        <img src={image} alt={title} />
      </figure>
      <div className="badge-dis">
        <span>
          <strong>{discount}%</strong>
          off
        </span>
      </div>
      <div className="special-content">
        <div className="meta-cat">
          <a href="#">{location}</a>
        </div>
        <h3>
          <a href="#">{title}</a>
        </h3>
        <div className="package-price">
          Price:
          <del>${originalPrice}</del>
          <ins>${discountedPrice}</ins>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Special: React.FC = () => {
  return (
    <section className="special-section">
      <div className="container">
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <motion.h5
                className="dash-style"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                TRAVEL OFFER & DISCOUNT
              </motion.h5>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                SPECIAL TRAVEL OFFER
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Mollit voluptatem perspiciatis convallis elementum corporis quo
                veritatis aliquid blandit, blandit torquent, odit placeat.
                Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae
                placeat.
              </motion.p>
            </div>
          </div>
        </motion.div>
        <div className="special-inner">
          <div className="row">
            {specialOffers.map((offer, index) => (
              <SpecialOfferCard key={index} {...offer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
