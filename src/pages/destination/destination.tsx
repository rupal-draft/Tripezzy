import React from "react";
import { motion } from "framer-motion";
import { Destinations } from "../../utils/constants";

interface DestinationItemProps {
  image: string;
  country: string;
  name: string;
  rating: number;
}

const DestinationItem: React.FC<DestinationItemProps> = ({
  image,
  country,
  name,
  rating,
}) => (
  <motion.div
    className="desti-item overlay-desti-item"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <motion.figure
      className="desti-image"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={name} />
    </motion.figure>
    <div className="meta-cat bg-meta-cat">
      <a href="#">{country}</a>
    </div>
    <div className="desti-content">
      <h3>
        <a href="#">{name}</a>
      </h3>
      <div className="rating-start" title={`Rated ${rating} out of 5`}>
        <span style={{ width: `${rating * 20}%` }}></span>
      </div>
    </div>
  </motion.div>
);

const destinations: DestinationItemProps[] = Destinations;
const Destination: React.FC = () => {
  return (
    <main id="content" className="site-main">
      <motion.section
        className="inner-banner-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="inner-baner-container"
          style={{
            backgroundImage: "url(assets/images/inner-banner.jpg)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100px",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
              zIndex: 1,
            }}
          />
          <div
            className="container"
            style={{ position: "relative", zIndex: 2 }}
          >
            <div className="inner-banner-content">
              <h1
                className="inner-title"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "4rem",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  color: "#ffffff",
                }}
              >
                Destination
              </h1>
            </div>
          </div>
        </div>
      </motion.section>
      <section
        className="destination-section destination-page"
        style={{ marginTop: "-50px" }}
      >
        <div className="container">
          <div className="destination-inner destination-three-column">
            <div className="row">
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-sm-6">
                    <DestinationItem {...destinations[0]} />
                  </div>
                  <div className="col-sm-6">
                    <DestinationItem {...destinations[1]} />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="row">
                  <div className="col-md-6 col-xl-12">
                    <DestinationItem {...destinations[2]} />
                  </div>
                  <div className="col-md-6 col-xl-12">
                    <DestinationItem {...destinations[3]} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="row">
                  <div className="col-md-6 col-xl-12">
                    <DestinationItem {...destinations[4]} />
                  </div>
                  <div className="col-md-6 col-xl-12">
                    <DestinationItem {...destinations[5]} />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-sm-6">
                    <DestinationItem {...destinations[6]} />
                  </div>
                  <div className="col-sm-6">
                    <DestinationItem {...destinations[7]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <motion.section
        className="subscribe-section"
        style={{ backgroundImage: "url(assets/images/img16.jpg)" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* ... (subscribe section content remains unchanged) */}
      </motion.section>
    </main>
  );
};

export default Destination;
