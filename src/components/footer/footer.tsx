import React from "react";
import { motion } from "framer-motion";
import { LatestBlogPosts } from "../../utils/constants";

type LatestPost = {
  title: string;
  date: string;
  commentsLink: string;
};

const AboutTravel: React.FC = () => (
  <motion.aside
    className="widget widget_text"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="widget-title">About Travel</h3>
    <div className="textwidget widget-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
      luctus nec ullamcorper mattis, pulvinar dapibus leo.
    </div>
    <motion.div
      className="award-img"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <a href="#">
        <img src="assets/images/logo6.png" alt="" />
      </a>
      <a href="#">
        <img src="assets/images/logo2.png" alt="" />
      </a>
    </motion.div>
  </motion.aside>
);

const ContactInformation: React.FC = () => (
  <motion.aside
    className="widget widget_text"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h3 className="widget-title">CONTACT INFORMATION</h3>
    <div className="textwidget widget-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <ul>
        <motion.li
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a href="#">
            <i className="fas fa-phone-alt"></i>+01 (977) 2599 12
          </a>
        </motion.li>
        <motion.li
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a href="#">
            <i className="fas fa-envelope"></i>
            <span
              className="__cf_email__"
              data-cfemail="b3d0dcdec3d2ddcaf3d7dcded2dadd9dd0dcde"
            >
              [email&#160;protected]
            </span>
          </a>
        </motion.li>
        <motion.li
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <i className="fas fa-map-marker-alt"></i>3146 Koontz, California
        </motion.li>
      </ul>
    </div>
  </motion.aside>
);

const LatestPosts: React.FC = () => {
  const posts: LatestPost[] = LatestBlogPosts;

  return (
    <motion.aside
      className="widget widget_recent_post"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3 className="widget-title">Latest Post</h3>
      <ul>
        {posts.map((post, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
          >
            <h5>
              <a href="#">{post.title}</a>
            </h5>
            <div className="entry-meta">
              <span className="post-on">
                <a href="#">{post.date}</a>
              </span>
              <span className="comments-link">
                <a href={post.commentsLink}>No Comments</a>
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.aside>
  );
};

const SubscribeForm: React.FC = () => (
  <motion.aside
    className="widget widget_newslatter"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <h3 className="widget-title">SUBSCRIBE US</h3>
    <div className="widget-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
    <form className="newslatter-form">
      <motion.input
        whileFocus={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        type="email"
        name="s"
        placeholder="Your Email.."
      />
      <motion.input
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        type="submit"
        name="s"
        value="SUBSCRIBE NOW"
      />
    </form>
  </motion.aside>
);

const Footer: React.FC = () => {
  return (
    <footer id="colophon" className="site-footer footer-primary">
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <AboutTravel />
            </div>
            <div className="col-lg-3 col-md-6">
              <ContactInformation />
            </div>
            <div className="col-lg-3 col-md-6">
              <LatestPosts />
            </div>
            <div className="col-lg-3 col-md-6">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="buttom-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="footer-menu">
                <ul>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href="#">Privacy Policy</a>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href="#">Term & Condition</a>
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href="#">FAQ</a>
                  </motion.li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <motion.div
                className="footer-logo"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#">
                  <img src="assets/images/travele-logo.png" alt="" />
                </a>
              </motion.div>
            </div>
            <div className="col-md-5">
              <div className="copy-right text-right">
                Copyright © 2021 Travele. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
