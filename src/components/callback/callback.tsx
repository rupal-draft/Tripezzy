"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

interface CounterItemProps {
  icon: string;
  count: number;
  text: string;
}

const CounterItem: React.FC<CounterItemProps> = ({ icon, count, text }) => (
  <motion.div
    className="counter-item"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="counter-icon">
      <img src={icon} alt="" width={50} height={50} />
    </div>
    <div className="counter-content">
      <span className="counter-no">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {count}
        </motion.span>
        K+
      </span>
      <span className="counter-text">{text}</span>
    </div>
  </motion.div>
);

const Callback: React.FC = () => {
  return (
    <section className="callback-section">
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-5">
            <motion.div
              className="callback-img"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/assets/images/img8.jpg"
                alt="Travel destination"
                width={600}
                height={400}
              />
            </motion.div>
          </div>
          <div className="col-lg-7">
            <div className="callback-inner">
              <motion.div
                className="section-heading section-heading-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h5 className="dash-style">CALLBACK FOR MORE</h5>
                <h2>GO TRAVEL. DISCOVER. REMEMBER US!!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo. Eaque adipiscing, luctus eleifend.
                </p>
              </motion.div>
              <div className="callback-counter-wrap">
                <CounterItem
                  icon="/assets/images/icon1.png"
                  count={500}
                  text="Satisfied Clients"
                />
                <CounterItem
                  icon="/assets/images/icon2.png"
                  count={250}
                  text="Satisfied Clients"
                />
                <CounterItem
                  icon="/assets/images/icon3.png"
                  count={15}
                  text="Satisfied Clients"
                />
                <CounterItem
                  icon="/assets/images/icon4.png"
                  count={10}
                  text="Satisfied Clients"
                />
              </div>
              <motion.div
                className="support-area"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="support-icon">
                  <Phone
                    className="h-12 w-12 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="support-content">
                  <h4>Our 24/7 Emergency Phone Services</h4>
                  <h3>
                    <a href="tel:123-456-7890">Call: 123-456-7890</a>
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Callback;
