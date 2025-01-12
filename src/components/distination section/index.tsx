"use client";

import React from "react";
import { motion } from "framer-motion";

const DestinationSection: React.FC = () => {
  return (
    <section className="destination-section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="row align-items-end">
            <div className="col-lg-7">
              <motion.h5
                className="dash-style"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                POPULAR DESTINATION
              </motion.h5>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                TOP NOTCH DESTINATION
              </motion.h2>
            </div>
            <div className="col-lg-5">
              <motion.div
                className="section-disc"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Aperiam sociosqu urna praesent, tristique, corrupti condimentum
                asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare
                quas provident laoreet nesciunt.
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className="destination-inner destination-three-column">
          <div className="row">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <motion.div
                    className="desti-item overlay-desti-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <figure className="desti-image">
                      <img
                        src="assets/images/img1.jpg"
                        alt="Thailand Destination"
                      />
                    </figure>
                    <div className="meta-cat bg-meta-cat">
                      <a href="#">THAILAND</a>
                    </div>
                    <div className="desti-content">
                      <h3>
                        <a href="#">Disney Land</a>
                      </h3>
                      <div className="rating-start" title="Rated 5 out of 4">
                        <span style={{ width: "53%" }}></span>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="col-sm-6">
                  <motion.div
                    className="desti-item overlay-desti-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <figure className="desti-image">
                      <img
                        src="assets/images/img2.jpg"
                        alt="Norway Destination"
                      />
                    </figure>
                    <div className="meta-cat bg-meta-cat">
                      <a href="#">NORWAY</a>
                    </div>
                    <div className="desti-content">
                      <h3>
                        <a href="#">Besseggen Ridge</a>
                      </h3>
                      <div className="rating-start" title="Rated 5 out of 5">
                        <span style={{ width: "100%" }}></span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row">
                <div className="col-md-6 col-xl-12">
                  <motion.div
                    className="desti-item overlay-desti-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <figure className="desti-image">
                      <img
                        src="assets/images/img3.jpg"
                        alt="New Zealand Destination"
                      />
                    </figure>
                    <div className="meta-cat bg-meta-cat">
                      <a href="#">NEW ZEALAND</a>
                    </div>
                    <div className="desti-content">
                      <h3>
                        <a href="#">Oxolotan City</a>
                      </h3>
                      <div className="rating-start" title="Rated 5 out of 5">
                        <span style={{ width: "100%" }}></span>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="col-md-6 col-xl-12">
                  <motion.div
                    className="desti-item overlay-desti-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <figure className="desti-image">
                      <img
                        src="assets/images/img4.jpg"
                        alt="Singapore Destination"
                      />
                    </figure>
                    <div className="meta-cat bg-meta-cat">
                      <a href="#">SINGAPORE</a>
                    </div>
                    <div className="desti-content">
                      <h3>
                        <a href="#">Marina Bay Sand City</a>
                      </h3>
                      <div className="rating-start" title="Rated 5 out of 4">
                        <span style={{ width: "60%" }}></span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className="btn-wrap text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="#"
              className="button-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MORE DESTINATION
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
