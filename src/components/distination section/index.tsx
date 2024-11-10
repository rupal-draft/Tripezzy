import React from "react";
import { motion } from "framer-motion";

const DestinationSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="destination-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="section-heading" variants={itemVariants}>
          <div className="row align-items-end">
            <div className="col-lg-7">
              <motion.h5 className="dash-style" variants={itemVariants}>
                POPULAR DESTINATION
              </motion.h5>
              <motion.h2 variants={itemVariants}>
                TOP NOTCH DESTINATION
              </motion.h2>
            </div>
            <div className="col-lg-5">
              <motion.div className="section-disc" variants={itemVariants}>
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
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <figure className="desti-image">
                      <img src="assets/images/img1.jpg" alt="" />
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
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <figure className="desti-image">
                      <img src="assets/images/img2.jpg" alt="" />
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
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <figure className="desti-image">
                      <img src="assets/images/img3.jpg" alt="" />
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
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <figure className="desti-image">
                      <img src="assets/images/img4.jpg" alt="" />
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
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#" className="button-primary">
              MORE DESTINATION
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default DestinationSection;
