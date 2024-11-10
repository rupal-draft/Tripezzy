import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div
      className="testimonial-section"
      style={{ backgroundImage: "url(assets/images/img23.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <Slider {...settings} className="testimonial-inner">
              <div className="testimonial-item text-center">
                <figure className="testimonial-img">
                  <img src="assets/images/img20.jpg" alt="Johny English" />
                </figure>
                <div className="testimonial-content">
                  <p>
                    " Dolorum aenean dolorem minima! Voluptatum? Corporis
                    condimentum ac primis fusce, atque! Vivamus. Non cupiditate
                    natus excepturi, quod quo, aute facere? Deserunt aliquip,
                    egestas ipsum, eu.Dolorum aenean dolorem minima!? Corporis
                    condi mentum acpri! "
                  </p>
                  <cite>
                    Johny English
                    <span className="company">Travel Agent</span>
                  </cite>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <figure className="testimonial-img">
                  <img src="assets/images/img21.jpg" alt="William Housten" />
                </figure>
                <div className="testimonial-content">
                  <p>
                    " Dolorum aenean dolorem minima! Voluptatum? Corporis
                    condimentum ac primis fusce, atque! Vivamus. Non cupiditate
                    natus excepturi, quod quo, aute facere? Deserunt aliquip,
                    egestas ipsum, eu.Dolorum aenean dolorem minima!? Corporis
                    condi mentum acpri! "
                  </p>
                  <cite>
                    William Housten
                    <span className="company">Travel Agent</span>
                  </cite>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <figure className="testimonial-img">
                  <img src="assets/images/img22.jpg" alt="Alison Wright" />
                </figure>
                <div className="testimonial-content">
                  <p>
                    " Dolorum aenean dolorem minima! Voluptatum? Corporis
                    condimentum ac primis fusce, atque! Vivamus. Non cupiditate
                    natus excepturi, quod quo, aute facere? Deserunt aliquip,
                    egestas ipsum, eu.Dolorum aenean dolorem minima!? Corporis
                    condi mentum acpri! "
                  </p>
                  <cite>
                    Alison Wright
                    <span className="company">Travel Guide</span>
                  </cite>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
