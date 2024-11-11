import React from "react";
import { motion } from "framer-motion";
import { contactInfo } from "../../utils/constants";

interface ContactInfo {
  icon: string;
  items: string[];
}

const ContactDetails: React.FC<{ info: ContactInfo }> = ({ info }) => (
  <motion.div
    className="col-sm-4"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="contact-details">
      <div className="contact-icon">
        <img src={info.icon} alt="" />
      </div>
      <ul>
        {info.items.map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Contact: React.FC = () => {
  const ContactInfo: ContactInfo[] = contactInfo;
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <motion.div
              className="contact-img"
              style={{ backgroundImage: "url(assets/images/img24.jpg)" }}
              whileHover={{ scale: 1.05 }}
            ></motion.div>
          </div>
          <div className="col-lg-8">
            <div className="contact-details-wrap">
              <div className="row">
                {ContactInfo.map((info, index) => (
                  <ContactDetails key={index} info={info} />
                ))}
              </div>
            </div>
            <motion.div
              className="contact-btn-wrap"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <h3>LET'S JOIN US FOR MORE UPDATE !!</h3>
              <motion.a
                href="#"
                className="button-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                LEARN MORE
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
