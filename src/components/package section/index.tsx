import React from "react";

const PackageSection: React.FC = () => {
  return (
    <section className="package-section">
      <div className="container">
        <div className="section-heading text-center">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h5 className="dash-style">EXPLORE GREAT PLACES</h5>
              <h2>POPULAR PACKAGES</h2>
              <p>
                Mollit voluptatem perspiciatis convallis elementum corporis quo
                veritatis aliquid blandit, blandit torquent, odit placeat.
                Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae
                placeat.
              </p>
            </div>
          </div>
        </div>
        <div className="package-inner">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="package-wrap">
                <figure className="feature-image">
                  <a href="#">
                    <img src="assets/images/img5.jpg" alt="" />
                  </a>
                </figure>
                <div className="package-price">
                  <h6>
                    <span>$1,900 </span> / per person
                  </h6>
                </div>
                <div className="package-content-wrap">
                  <div className="package-meta text-center">
                    <ul>
                      <li>
                        <i className="far fa-clock"></i>
                        7D/6N
                      </li>
                      <li>
                        <i className="fas fa-user-friends"></i>
                        People: 5
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        Malaysia
                      </li>
                    </ul>
                  </div>
                  <div className="package-content">
                    <h3>
                      <a href="#">Sunset view of beautiful lakeside resident</a>
                    </h3>
                    <div className="review-area">
                      <span className="review-text">(25 reviews)</span>
                      <div className="rating-start" title="Rated 5 out of 5">
                        <span style={{ width: "60%" }}></span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      luctus nec ullam. Ut elit tellus, luctus nec ullam elit
                      tellpus.
                    </p>
                    <div className="btn-wrap">
                      <a href="#" className="button-text width-6">
                        Book Now<i className="fas fa-arrow-right"></i>
                      </a>
                      <a href="#" className="button-text width-6">
                        Wish List<i className="far fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="package-wrap">
                <figure className="feature-image">
                  <a href="#">
                    <img src="assets/images/img6.jpg" alt="" />
                  </a>
                </figure>
                <div className="package-price">
                  <h6>
                    <span>$1,230 </span> / per person
                  </h6>
                </div>
                <div className="package-content-wrap">
                  <div className="package-meta text-center">
                    <ul>
                      <li>
                        <i className="far fa-clock"></i>
                        5D/4N
                      </li>
                      <li>
                        <i className="fas fa-user-friends"></i>
                        People: 8
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        Canada
                      </li>
                    </ul>
                  </div>
                  <div className="package-content">
                    <h3>
                      <a href="#">Experience the natural beauty of island</a>
                    </h3>
                    <div className="review-area">
                      <span className="review-text">(17 reviews)</span>
                      <div className="rating-start" title="Rated 5 out of 5">
                        <span style={{ width: "100%" }}></span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      luctus nec ullam. Ut elit tellus, luctus nec ullam elit
                      tellpus.
                    </p>
                    <div className="btn-wrap">
                      <a href="#" className="button-text width-6">
                        Book Now<i className="fas fa-arrow-right"></i>
                      </a>
                      <a href="#" className="button-text width-6">
                        Wish List<i className="far fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="package-wrap">
                <figure className="feature-image">
                  <a href="#">
                    <img src="assets/images/img7.jpg" alt="" />
                  </a>
                </figure>
                <div className="package-price">
                  <h6>
                    <span>$2,000 </span> / per person
                  </h6>
                </div>
                <div className="package-content-wrap">
                  <div className="package-meta text-center">
                    <ul>
                      <li>
                        <i className="far fa-clock"></i>
                        6D/5N
                      </li>
                      <li>
                        <i className="fas fa-user-friends"></i>
                        People: 6
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        Portugal
                      </li>
                    </ul>
                  </div>
                  <div className="package-content">
                    <h3>
                      <a href="#">Vacation to the water city of Portugal</a>
                    </h3>
                    <div className="review-area">
                      <span className="review-text">(22 reviews)</span>
                      <div className="rating-start" title="Rated 5 out of 5">
                        <span style={{ width: "80%" }}></span>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      luctus nec ullam. Ut elit tellus, luctus nec ullam elit
                      tellpus.
                    </p>
                    <div className="btn-wrap">
                      <a href="#" className="button-text width-6">
                        Book Now<i className="fas fa-arrow-right"></i>
                      </a>
                      <a href="#" className="button-text width-6">
                        Wish List<i className="far fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-wrap text-center">
            <a href="#" className="button-primary">
              VIEW ALL PACKAGES
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PackageSection;
