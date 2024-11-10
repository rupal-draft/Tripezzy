import React from "react";
import { motion } from "framer-motion";

const PackageSection: React.FC = () => {
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
      className="package-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div
          className="section-heading text-center"
          variants={itemVariants}
        >
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <motion.h5 className="dash-style" variants={itemVariants}>
                EXPLORE GREAT PLACES
              </motion.h5>
              <motion.h2 variants={itemVariants}>POPULAR PACKAGES</motion.h2>
              <motion.p variants={itemVariants}>
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
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className="col-lg-4 col-md-6"
                variants={itemVariants}
              >
                <motion.div
                  className="package-wrap"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <figure className="feature-image">
                    <a href="#">
                      <img src={`assets/images/img${index + 4}.jpg`} alt="" />
                    </a>
                  </figure>
                  <div className="package-price">
                    <h6>
                      <span>${1000 + index * 300} </span> / per person
                    </h6>
                  </div>
                  <div className="package-content-wrap">
                    <div className="package-meta text-center">
                      <ul>
                        <li>
                          <i className="far fa-clock"></i>
                          {7 - index}D/{6 - index}N
                        </li>
                        <li>
                          <i className="fas fa-user-friends"></i>
                          People: {9 - index}
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>
                          {["Malaysia", "Canada", "Portugal"][index - 1]}
                        </li>
                      </ul>
                    </div>
                    <div className="package-content">
                      <h3>
                        <a href="#">
                          {
                            [
                              "Sunset view of beautiful lakeside resident",
                              "Experience the natural beauty of island",
                              "Vacation to the water city of Portugal",
                            ][index - 1]
                          }
                        </a>
                      </h3>
                      <div className="review-area">
                        <span className="review-text">
                          ({25 - index * 3} reviews)
                        </span>
                        <div className="rating-start" title="Rated 5 out of 5">
                          <span style={{ width: `${60 + index * 20}%` }}></span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        luctus nec ullam. Ut elit tellus, luctus nec ullam elit
                        tellpus.
                      </p>
                      <div className="btn-wrap">
                        <motion.a
                          href="#"
                          className="button-text width-6"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          Book Now<i className="fas fa-arrow-right"></i>
                        </motion.a>
                        <motion.a
                          href="#"
                          className="button-text width-6"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          Wish List<i className="far fa-heart"></i>
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
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="#" className="button-primary">
              VIEW ALL PACKAGES
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PackageSection;
