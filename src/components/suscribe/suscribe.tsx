import React from "react";

const Suscribe: React.FC = () => {
  return (
    <section
      className="subscribe-section"
      style={{ backgroundImage: "url(assets/images/img16.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="section-heading section-heading-white">
              <h5 className="dash-style">HOLIDAY PACKAGE OFFER</h5>
              <h2>HOLIDAY SPECIAL 25% OFF !</h2>
              <h4>
                Sign up now to recieve hot special offers and information about
                the best tour packages, updates and discounts !!
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Eaque adipiscing, luctus eleifend temporibus occaecat luctus
                eleifend tempo ribus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suscribe;