import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavItemes, SocialLinkItems } from "../../utils/constants";

type SocialLink = {
  icon: string;
  url: string;
};

type NavItem = {
  title: string;
  url: string;
  children?: NavItem[];
};

const ContactInfo: React.FC = () => (
  <motion.div
    className="header-contact-info"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <ul>
      <li>
        <a href="#">
          <i className="fas fa-phone-alt"></i> +01 (977) 2599 12
        </a>
      </li>
      <li>
        <a href="mailto:[email&#160;protected]">
          <i className="fas fa-envelope"></i> [email&#160;protected]
        </a>
      </li>
      <li>
        <i className="fas fa-map-marker-alt"></i> 3146 Koontz Lane, California
      </li>
    </ul>
  </motion.div>
);

const SocialLinks: React.FC<{ links: SocialLink[] }> = ({ links }) => (
  <motion.div
    className="header-social social-links"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <ul>
      {links.map((link, index) => (
        <motion.li
          key={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href={link.url}>
            <i className={link.icon} aria-hidden="true"></i>
          </a>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const SearchIcon: React.FC = () => (
  <motion.div
    className="header-search-icon"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <button className="search-icon">
      <i className="fas fa-search"></i>
    </button>
  </motion.div>
);

const Logo: React.FC = () => (
  <motion.div
    className="site-identity"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="site-title">
      <a href="index">
        <img
          className="white-logo"
          src="assets/images/travele-logo.png"
          alt="logo"
        />
        <img
          className="black-logo"
          src="assets/images/travele-logo1.png"
          alt="logo"
        />
      </a>
    </h1>
  </motion.div>
);

const NavMenu: React.FC<{ items: NavItem[] }> = ({ items }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav id="navigation" className="navigation">
      <ul>
        {items.map((item, index) => (
          <motion.li
            key={index}
            className={item.children ? "menu-item-has-children" : ""}
            onHoverStart={() => setHoveredItem(item.title)}
            onHoverEnd={() => setHoveredItem(null)}
          >
            <a href={item.url}>{item.title}</a>
            {item.children && (
              <AnimatePresence>
                {hoveredItem === item.title && (
                  <motion.ul
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.children.map((subItem, subIndex) => (
                      <motion.li key={subIndex} whileHover={{ x: 5 }}>
                        <a href={subItem.url}>{subItem.title}</a>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

const BuyNowButton: React.FC = () => (
  <motion.div
    className="header-btn"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <a href="https://1.envato.market/6eay43" className="button-primary">
      BUY NOW
    </a>
  </motion.div>
);

const Header: React.FC = () => {
  const socialLinks: SocialLink[] = SocialLinkItems;
  const navItems: NavItem[] = NavItemes;
  return (
    <motion.header
      id="masthead"
      className="site-header header-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 d-none d-lg-block">
              <ContactInfo />
            </div>
            <div className="col-lg-4 d-flex justify-content-lg-end justify-content-between">
              <SocialLinks links={socialLinks} />
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="container d-flex justify-content-between align-items-center">
          <Logo />
          <div className="main-navigation d-none d-lg-block">
            <NavMenu items={navItems} />
          </div>
          <BuyNowButton />
        </div>
      </div>
      <div className="mobile-menu-container"></div>
    </motion.header>
  );
};

export default Header;
