"use client";

import React from "react";
import { motion } from "framer-motion";
import Banner from "../../components/banner";
import { clients, services } from "../../utils/constants";
import { TravelCallbackSection } from "../../components/callback/enhancedCallback";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

interface ClientItem {
  id: number;
  logo: string;
}

const AboutUs: React.FC = () => {
  return (
    <main id="content" className="site-main">
      <Banner heading="About Us" />
      <section className="about-section about-page-section">
        <div className="about-service-wrap">
          <div className="container">
            <motion.div
              className="section-heading"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="row align-items-end">
                <div className="col-lg-6">
                  <h5 className="dash-style">OUR TOUR GALLERY</h5>
                  <h2>HELLO. OUR AGENCY HAS BEEN PRESENT BEST IN THE MARKET</h2>
                </div>
                <div className="col-lg-6">
                  <div className="section-disc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.Placeat nostrud natus tempora justo.
                      Laboriosam, eget mus nostrud natus tempora.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipiscing
                      eliting dolor sit amet. Placeat nostrud natus tempora
                      justo nostrud natus tempora.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="about-service-container">
              <div className="row">
                {services.map((service: ServiceItem, index) => (
                  <motion.div
                    key={index}
                    className="col-lg-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="about-service">
                      <div className="about-service-icon">
                        <img
                          src={service.icon}
                          alt={service.title}
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="about-service-content">
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="about-video-wrap"
              style={{ backgroundImage: "url(assets/images/img25.jpg)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="video-button">
                <a id="video-container" data-video-id="IUN664s7N-c">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="client-section">
          <div className="container">
            <motion.div
              className="section-heading text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h5 className="dash-style">OUR ASSOCAITES</h5>
              <h2>PARTNER'S AND CLIENTS</h2>
              <p>
                Mollit voluptatem perspiciatis convallis elementum corporis quo
                veritatis aliquid blandit, blandit torquent, odit placeat.
                Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae
                placeat.
              </p>
            </motion.div>
            <div className="client-wrap client-slider">
              {clients.map((client: ClientItem) => (
                <motion.div
                  key={client.id}
                  className="client-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: client.id * 0.1 }}
                >
                  <figure>
                    <img
                      src={client.logo}
                      alt="Client Logo"
                      width={150}
                      height={75}
                    />
                  </figure>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <TravelCallbackSection />
      </section>
    </main>
  );
};

export default AboutUs;
