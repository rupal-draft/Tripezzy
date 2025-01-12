import React from "react";
import { motion } from "framer-motion";
import { counterItems } from "../../utils/constants";

interface CounterItem {
  icon: string;
  count: number;
  text: string;
}

const EnhancedCallbackSection: React.FC = () => {
  return (
    <motion.div
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-24 text-white"
      style={{ backgroundImage: "url(/assets/images/img26.jpg)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h5 className="mb-4 inline-block border-b-2 border-primary-500 px-2 py-1 text-sm font-semibold uppercase tracking-wider text-primary-300">
            CALLBACK FOR MORE
          </h5>
          <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
            GO TRAVEL. DISCOVER.{" "}
            <span className="text-primary-300">REMEMBER US!!</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
            Mollit voluptatem perspiciatis convallis elementum corporis quo
            veritatis aliquid blandit, blandit torquent, odit placeat.
            Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae
            placeat.
          </p>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {counterItems.map((item: CounterItem, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="mb-4 inline-block rounded-full bg-white p-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={item.icon}
                  alt={item.text}
                  width={60}
                  height={60}
                  className="h-12 w-12 object-contain"
                />
              </motion.div>
              <div className="counter-content">
                <span className="mb-2 block text-4xl font-bold text-primary-300">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {item.count}
                  </motion.span>
                  K+
                </span>
                <span className="text-lg font-medium">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedCallbackSection;
