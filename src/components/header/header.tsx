import React from "react";

const Header: React.FC = () => {
  return (
    <header id="masthead" className="site-header header-primary">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 d-none d-lg-block">
              <div className="header-contact-info">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-phone-alt"></i> +01 (977) 2599 12
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.bosathemes.com/cdn-cgi/l/email-protection#f59c9b939ab5a18794839099db969a98">
                      <i className="fas fa-envelope"></i>{" "}
                      <span
                        className="__cf_email__"
                        data-cfemail="492a262439282730092d2624282027672a2624"
                      >
                        [email&#160;protected]
                      </span>
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> 3146 Koontz Lane,
                    California
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-lg-end justify-content-between">
              <div className="header-social social-links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header-search-icon">
                <button className="search-icon">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="site-identity">
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
          </div>
          <div className="main-navigation d-none d-lg-block">
            <nav id="navigation" className="navigation">
              <ul>
                <li className="menu-item-has-children">
                  <a href="#">Tour</a>
                  <ul>
                    <li>
                      <a href="destination">Destination</a>
                    </li>
                    <li>
                      <a href="tour-packages">Tour Packages</a>
                    </li>
                    <li>
                      <a href="package-offer">Package Offer</a>
                    </li>
                    <li>
                      <a href="package-detail">Package Detail</a>
                    </li>
                    <li>
                      <a href="tour-cart">Tour Cart</a>
                    </li>
                    <li>
                      <a href="booking">Package Booking</a>
                    </li>
                    <li>
                      <a href="confirmation">Confirmation</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Pages</a>
                  <ul>
                    <li>
                      <a href="about">About</a>
                    </li>
                    <li>
                      <a href="service">Service</a>
                    </li>
                    <li>
                      <a href="career">Career</a>
                    </li>
                    <li>
                      <a href="career-detail">Career Detail</a>
                    </li>
                    <li>
                      <a href="tour-guide">Tour Guide</a>
                    </li>
                    <li>
                      <a href="gallery">Gallery</a>
                    </li>
                    <li>
                      <a href="single-page">Single Page</a>
                    </li>
                    <li>
                      <a href="faq">FAQ Page</a>
                    </li>
                    <li>
                      <a href="testimonial-page">Testimonial Page</a>
                    </li>
                    <li>
                      <a href="popup">Popup</a>
                    </li>
                    <li>
                      <a href="search-page">Search Page</a>
                    </li>
                    <li>
                      <a href="404">404 Page</a>
                    </li>
                    <li>
                      <a href="comming-soon">Comming Soon</a>
                    </li>
                    <li>
                      <a href="contact">Contact</a>
                    </li>
                    <li>
                      <a href="wishlist-page">Wishlist</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="single-page">Shop</a>
                  <ul>
                    <li>
                      <a href="product-right">Shop Archive</a>
                    </li>
                    <li>
                      <a href="product-detail">Shop Single</a>
                    </li>
                    <li>
                      <a href="product-cart">Shop Cart</a>
                    </li>
                    <li>
                      <a href="product-checkout">Shop Checkout</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Blog</a>
                  <ul>
                    <li>
                      <a href="blog-archive">Blog List</a>
                    </li>
                    <li>
                      <a href="blog-archive-left">Blog Left Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-archive-both">Blog Both Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-single">Blog Single</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Dashboard</a>
                  <ul>
                    <li>
                      <a href="admin/dashboard">Dashboard</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">User</a>
                      <ul>
                        <li>
                          <a href="admin/user">User List</a>
                        </li>
                        <li>
                          <a href="admin/user-edit">User Edit</a>
                        </li>
                        <li>
                          <a href="admin/new-user">New User</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="admin/db-booking">Booking</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="admin/db-package">Package</a>
                      <ul>
                        <li>
                          <a href="admin/db-package-active">Package Active</a>
                        </li>
                        <li>
                          <a href="admin/db-package-pending">Package Pending</a>
                        </li>
                        <li>
                          <a href="admin/db-package-expired">Package Expired</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="admin/db-comment">Comments</a>
                    </li>
                    <li>
                      <a href="admin/db-wishlist">Wishlist</a>
                    </li>
                    <li>
                      <a href="admin/login">Login</a>
                    </li>
                    <li>
                      <a href="admin/forgot">Forget Password</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-btn">
            <a href="https://1.envato.market/6eay43" className="button-primary">
              BUY NOW
            </a>
          </div>
        </div>
      </div>
      <div className="mobile-menu-container"></div>
    </header>
  );
};

export default Header;
