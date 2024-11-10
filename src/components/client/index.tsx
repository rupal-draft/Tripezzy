import React from "react";
import { motion } from "framer-motion";
import { clients } from "../../utils/constants";

const Client: React.FC = () => {
  return (
    <div className="client-section">
      <div className="container">
        <motion.div
          className="client-wrap client-slider secondary-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            overflow: "hidden",
            padding: "20px 0",
          }}
        >
          <motion.div
            animate={{
              x: [0, -100 * clients.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{ display: "flex", gap: "40px" }}
          >
            {[...clients, ...clients].map((client) => (
              <motion.div
                key={`${client.id}-${Math.random()}`}
                className="client-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                style={{ flex: "0 0 auto" }}
              >
                <figure>
                  <motion.img
                    src={client.logo}
                    alt={`Client ${client.id}`}
                    initial={{ filter: "grayscale(100%)" }}
                    whileHover={{ filter: "grayscale(0%)" }}
                    transition={{ duration: 0.3 }}
                    style={{ maxWidth: "120px", height: "auto" }}
                  />
                </figure>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Client;
