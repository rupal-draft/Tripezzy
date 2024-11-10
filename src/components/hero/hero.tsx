import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerData } from "../../utils/constants";

const Hero: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <Slider {...sliderSettings}>
        {bannerData.map((banner, index) => (
          <div key={index} style={{ position: "relative" }}>
            <div
              style={{
                backgroundImage: `url(${banner.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)", 
              }}
            >
              <div
                style={{
                  maxWidth: "800px",
                  padding: "0 20px",
                  textAlign: "center",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.h2
                    style={{
                      fontSize: "48px",
                      fontWeight: "bold",
                      color: "white",
                      marginBottom: "20px",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)", // Added text shadow
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {banner.title}
                  </motion.h2>
                  <motion.p
                    style={{
                      fontSize: "18px",
                      color: "white",
                      marginBottom: "30px",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.5)", // Added text shadow
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {banner.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <motion.a
                      href="#"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        backgroundColor: "#FF6B6B", // Changed button color
                        color: "white",
                        fontWeight: "600",
                        padding: "15px 30px",
                        borderRadius: "50px",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        fontSize: "18px", // Increased font size
                        letterSpacing: "1px", // Added letter spacing
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
                        backgroundColor: "#FF8787", // Lighter color on hover
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>EXPLORE NOW</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          width: "24px",
                          height: "24px",
                          marginLeft: "10px",
                        }}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
