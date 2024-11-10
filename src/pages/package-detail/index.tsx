"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, MapPin, ArrowRight } from "lucide-react";
import Banner from "../../components/banner";
import GallerySection from "../../components/gallery section";

// Tab content components
const OverviewTab: React.FC = () => (
  <div className="overview-content">
    <p>
      Occaecat pariatur! Quaerat ligula, ab, consequuntur orci mus ultricies
      praesent aute blandit beatae nisl aut, totam mauris rhoncus? Tellus netus
      fringilla class auctor dui. Dolores excepteur, doloribus, blanditiis
      aliquip nisl. Occaecat iusto? Provident sociis rerum. Amet, asperiores
      molestie varius eos! Libero, fermentum fermentum totam! Sunt praesentium,
      totam. Excepteur platea nisl. Convallis aliquam? Iaculis erat ipsa
      molestie, quod, vestibulum reiciendis, maxime nostra, integer unde
      officiis quo integer unde officiis quo.
    </p>
    <p>
      Occaecat pariatur! Quaerat ligula, ab, consequuntur orci mus ultricies
      praesent aute blandit beatae nisl aut, totam mauris rhoncus? Tellus netus
      fringilla class auctor dui. Dolores excepteur, doloribus, blanditiis
      aliquip nisl..
    </p>
    <ul>
      {[
        "Travel cancellation insurance",
        "Breakfast and dinner included",
        "Health care included",
        "Transfer to the airport and return to the agency",
        "Lorem ipsum dolor sit amet, consectetur adipiscing",
      ].map((item, index) => (
        <li key={index}>- {item}</li>
      ))}
    </ul>
  </div>
);

const ProgramTab: React.FC = () => {
  const programDays = [
    { day: 1, title: "Ancient Rome Visit" },
    { day: 2, title: "Classic Rome Sightseeing" },
    { day: 3, title: "Vatican City Visit" },
    { day: 4, title: "Italian Food Tour" },
  ];

  return (
    <div className="itinerary-content">
      <h3>
        Program <span>( 4 days )</span>
      </h3>
      <p>
        Dolores maiores dicta dolore. Natoque placeat libero sunt sagittis
        debitis? Egestas non non qui quos, semper aperiam lacinia eum nam! Pede
        beatae. Soluta, convallis irure accusamus voluptatum ornare saepe
        cupidatat.
      </p>
      <div className="itinerary-timeline-wrap">
        <ul>
          {programDays.map((day, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <div className="day-count">
                  Day <span>{day.day}</span>
                </div>
                <h4>{day.title}</h4>
                <p>
                  Nostra semper ultricies eu leo eros orci porta provident,
                  fugit? Pariatur interdum assumenda, qui aliquip ipsa! Dictum
                  natus potenti pretium.
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ReviewTab: React.FC = () => {
  const reviews = [
    {
      author: "Tom Sawyer",
      date: "Jana 10 2020",
      rating: 4.5,
      content:
        "Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
    },
    {
      author: "John Doe",
      date: "Jana 10 2020",
      rating: 4.5,
      content:
        "Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
    },
    {
      author: "Jaan Smith",
      date: "Jana 10 2020",
      rating: 5,
      content:
        "Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.",
    },
  ];

  return (
    <div>
      <div className="summary-review">
        <div className="review-score">
          <span>4.9</span>
        </div>
        <div className="review-score-content">
          <h3>
            Excellent
            <span>( Based on 24 reviews )</span>
          </h3>
          <p>
            Tincidunt iaculis pede mus lobortis hendrerit eveniet impedit aenean
            mauris qui, pharetra rem doloremque laboris euismod deserunt non,
            cupiditate, vestibulum.
          </p>
        </div>
      </div>
      <div className="comment-area">
        <h3 className="comment-title">3 Reviews</h3>
        <div className="comment-area-inner">
          <ol>
            {reviews.map((review, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <figure className="comment-thumb">
                  <img
                    src={`/assets/images/img2${index}.jpg`}
                    alt={review.author}
                    width={60}
                    height={60}
                  />
                </figure>
                <div className="comment-content">
                  <div className="comment-header">
                    <h5 className="author-name">{review.author}</h5>
                    <span className="post-on">{review.date}</span>
                    <div className="rating-wrap">
                      <div
                        className="rating-start"
                        title={`Rated ${review.rating} out of 5`}
                      >
                        <span
                          style={{ width: `${review.rating * 20}%` }}
                        ></span>
                      </div>
                    </div>
                  </div>
                  <p>{review.content}</p>
                  <a href="#" className="reply">
                    <i className="fas fa-reply"></i>Reply
                  </a>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
        <div className="comment-form-wrap">
          <h3 className="comment-title">Leave a Review</h3>
          <form className="comment-form">
            <div className="full-width rate-wrap">
              <label>Your rating</label>
              <div className="procduct-rate">
                <span></span>
              </div>
            </div>
            <p>
              <input type="text" name="name" placeholder="Name" />
            </p>
            <p>
              <input type="text" name="name" placeholder="Last name" />
            </p>
            <p>
              <input type="email" name="email" placeholder="Email" />
            </p>
            <p>
              <input type="text" name="subject" placeholder="Subject" />
            </p>
            <p>
              <textarea rows={6} placeholder="Your review"></textarea>
            </p>
            <p>
              <input type="submit" name="submit" value="Submit" />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

const MapTab: React.FC = () => (
  <div className="map-area">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60998820.06503915!2d95.3386452160086!3d-21.069765827214972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2snp!4v1579777829477!5m2!1sen!2snp"
      height="450"
      allowFullScreen
    ></iframe>
  </div>
);

const Sidebar: React.FC = () => (
  <div className="sidebar">
    <div className="package-price">
      <h5 className="price">
        <span>$649</span> / per person
      </h5>
      <div className="start-wrap">
        <div className="rating-start" title="Rated 5 out of 5">
          <span style={{ width: "60%" }}></span>
        </div>
      </div>
    </div>
    <div className="widget-bg booking-form-wrap">
      <h4 className="bg-title">Booking</h4>
      <form className="booking-form">
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <input name="name_booking" type="text" placeholder="Full Name" />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <input name="email_booking" type="text" placeholder="Email" />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <input name="phone_booking" type="text" placeholder="Number" />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <input
                className="input-date-picker"
                type="text"
                name="s"
                autoComplete="off"
                readOnly
                placeholder="Date"
              />
            </div>
          </div>
          <div className="col-sm-12">
            <h4 className="">Add Options</h4>
          </div>
          {["Tour guide", "Insurance", "Dinner", "Bike rent"].map(
            (option, index) => (
              <div className="col-sm-6" key={index}>
                <div className="form-group">
                  <label className="checkbox-list">
                    <input type="checkbox" name="s" />
                    <span className="custom-checkbox"></span>
                    {option}
                  </label>
                </div>
              </div>
            )
          )}
          <div className="col-sm-12">
            <div className="form-group submit-btn">
              <input type="submit" name="submit" value="Book Now" />
            </div>
          </div>
        </div>
      </form>
    </div>
    <div className="widget-bg information-content text-center">
      <h5>TRAVEL TIPS</h5>
      <h3>NEED TRAVEL RELATED TIPS & INFORMATION</h3>
      <p>
        Mollit voluptatem perspiciatis convallis elementum corporis quo
        veritatis aliquid blandit, blandit torquent, odit placeat.{" "}
      </p>
      <a href="#" className="button-primary">
        GET A QUOTE
      </a>
    </div>
    <div
      className="travel-package-content text-center"
      style={{ backgroundImage: "url(assets/images/img11.jpg)" }}
    >
      <h5>MORE PACKAGES</h5>
      <h3>OTHER TRAVEL PACKAGES</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus.
      </p>
      <ul>
        {[
          "Vacation packages",
          "Honeymoon packages",
          "New year packages",
          "Weekend packages",
        ].map((package_, index) => (
          <li key={index}>
            <a href="#">
              <ArrowRight className="far fa-arrow-alt-circle-right" />
              {package_}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const PackageDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const tabContent: { [key: string]: React.ReactNode } = {
    overview: <OverviewTab />,
    program: <ProgramTab />,
    review: <ReviewTab />,
    map: <MapTab />,
  };

  return (
    <main id="content" className="site-main">
      <Banner heading="Package Detail" />

      <div className="single-tour-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-tour-inner">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                  }}
                >
                  EXPERIENCE THE NATURAL BEAUTY OF ISLAND
                </motion.h2>
                <figure className="feature-image">
                  <img
                    src="/assets/images/img27.jpg"
                    alt="Tour feature"
                    width={800}
                    height={600}
                  />
                  <div className="package-meta text-center">
                    <ul>
                      <li>
                        <Clock /> 6 days / 5 night
                      </li>
                      <li>
                        <Users /> People: 4
                      </li>
                      <li>
                        <MapPin /> Norway
                      </li>
                    </ul>
                  </div>
                </figure>
                <div className="tab-container">
                  <ul className="nav nav-tabs" role="tablist">
                    {Object.keys(tabContent).map((tab) => (
                      <li className="nav-item" key={tab}>
                        <a
                          className={`nav-link ${
                            activeTab === tab ? "active" : ""
                          }`}
                          onClick={() => setActiveTab(tab)}
                          role="tab"
                        >
                          {tab.toUpperCase()}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="tab-content">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tabContent[activeTab]}
                    </motion.div>
                  </div>
                </div>
                <GallerySection />
              </div>
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

      <motion.section
        className="subscribe-section"
        style={{ backgroundImage: "url(assets/images/img16.jpg)" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-heading section-heading-white">
                <h5 className="dash-style">HOLIDAY PACKAGE OFFER</h5>
                <h2>HOLIDAY SPECIAL 25% OFF !</h2>
                <h4>
                  Sign up now to recieve hot special offers and information
                  about the best tour packages, updates and discounts !!
                </h4>
                <div className="newsletter-form">
                  <form>
                    <input
                      type="email"
                      name="s"
                      placeholder="Your Email Address"
                    />
                    <input type="submit" name="signup" value="SIGN UP NOW!" />
                  </form>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo. Eaque adipiscing, luctus eleifend temporibus occaecat
                  luctus eleifend tempo ribus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default PackageDetail;
