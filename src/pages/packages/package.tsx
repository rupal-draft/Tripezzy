import React from "react";
import { motion } from "framer-motion";
import { Activities, Packages } from "../../utils/constants";
import Activity from "../../components/activity/activity";
import PackageSection from "../../components/package section";

interface ActivityProps {
  icon: string;
  title: string;
  destinations: number;
}
const packages = Packages;

const activities: ActivityProps[] = Activities;

const TourPackage: React.FC = () => {
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
                Tour Packages
              </h1>
            </div>
          </div>
        </div>
      </motion.section>

      <PackageSection packages={packages} />

      <Activity activities={activities} />
    </main>
  );
};

export default TourPackage;
