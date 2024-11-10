"use client";

import React from "react";
import { motion } from "framer-motion";

interface ActivityItem {
  icon: string;
  title: string;
  destinations: number;
}

interface ActivityProps {
  activities: ActivityItem[];
}

const ActivityCard: React.FC<ActivityItem> = ({
  icon,
  title,
  destinations,
}) => (
  <motion.div
    className="col-lg-2 col-md-4 col-sm-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="activity-item"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="activity-icon">
        <a href="#">
          <img src={icon} alt={title} />
        </a>
      </div>
      <div className="activity-content">
        <h4>
          <a href="#">{title}</a>
        </h4>
        <p>
          {destinations} Destination{destinations !== 1 ? "s" : ""}
        </p>
      </div>
    </motion.div>
  </motion.div>
);

const Activity: React.FC<ActivityProps> = ({ activities }) => {
  return (
    <section className="activity-section">
      <div className="container">
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h5 className="dash-style">TRAVEL BY ACTIVITY</h5>
              <h2>ADVENTURE & ACTIVITY</h2>
              <p>
                Mollit voluptatem perspiciatis convallis elementum corporis quo
                veritatis aliquid blandit, blandit torquent, odit placeat.
                Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae
                placeat.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="activity-inner row">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activity;
