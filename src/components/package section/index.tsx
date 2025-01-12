"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, MapPin, ArrowRight, Heart } from "lucide-react";

interface PackageProps {
  image: string;
  price: number;
  duration: string;
  people: number;
  location: string;
  title: string;
  reviews: number;
  rating: number;
  description: string;
}

interface PackageSectionProps {
  packages: PackageProps[];
}

const PackageSection: React.FC<PackageSectionProps> = ({ packages }) => {
  return (
    <section className="package-section">
      <div className="container">
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <motion.h5
                className="dash-style"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                EXPLORE GREAT PLACES
              </motion.h5>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                POPULAR PACKAGES
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
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
        <div className="package-inner">
          <div className="row">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="package-wrap"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <figure className="feature-image">
                    <a href="#">
                      <img src={pkg.image} alt={pkg.title} />
                    </a>
                  </figure>
                  <div className="package-price">
                    <h6>
                      <span>${pkg.price.toLocaleString()} </span> / per person
                    </h6>
                  </div>
                  <div className="package-content-wrap">
                    <div className="package-meta text-center">
                      <ul>
                        <li>
                          <Clock className="inline-block w-4 h-4 mr-1" />
                          {pkg.duration}
                        </li>
                        <li>
                          <Users className="inline-block w-4 h-4 mr-1" />
                          People: {pkg.people}
                        </li>
                        <li>
                          <MapPin className="inline-block w-4 h-4 mr-1" />
                          {pkg.location}
                        </li>
                      </ul>
                    </div>
                    <div className="package-content">
                      <h3>
                        <a href="#">{pkg.title}</a>
                      </h3>
                      <div className="review-area">
                        <span className="review-text">
                          ({pkg.reviews} reviews)
                        </span>
                        <div
                          className="rating-start"
                          title={`Rated ${pkg.rating} out of 5`}
                        >
                          <span style={{ width: `${pkg.rating * 20}%` }}></span>
                        </div>
                      </div>
                      <p>{pkg.description}</p>
                      <div className="btn-wrap">
                        <motion.a
                          href="#"
                          className="button-text width-6"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          Book Now
                          <ArrowRight className="inline-block w-4 h-4 ml-1" />
                        </motion.a>
                        <motion.a
                          href="#"
                          className="button-text width-6"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          Wish List
                          <Heart className="inline-block w-4 h-4 ml-1" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="btn-wrap text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href="#"
              className="button-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              VIEW ALL PACKAGES
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
