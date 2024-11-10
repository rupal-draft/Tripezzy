import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="contact-img"
              style={{ backgroundImage: "url(assets/images/img24.jpg)" }}
            ></div>
          </div>
          <div className="col-lg-8">
            <div className="contact-details-wrap">
              <div className="row">
                <div className="col-sm-4">
                  <div className="contact-details">
                    <div className="contact-icon">
                      <img src="assets/images/icon12.png" alt="" />
                    </div>
                    <ul>
                      <li>
                        <a href="#">
                          <span
                            className="__cf_email__"
                            data-cfemail="b6c5c3c6c6d9c4c2f6d1dbd7dfda98d5d9db"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span
                            className="__cf_email__"
                            data-cfemail="660f0800092602090b070f084805090b"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span
                            className="__cf_email__"
                            data-cfemail="c2aca3afa782a1adafb2a3acbbeca1adaf"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="contact-details">
                    <div className="contact-icon">
                      <img src="assets/images/icon13.png" alt="" />
                    </div>
                    <ul>
                      <li>
                        <a href="#">+132 (599) 254 669</a>
                      </li>
                      <li>
                        <a href="#">+123 (669) 255 587</a>
                      </li>
                      <li>
                        <a href="#">+01 (977) 2599 12</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="contact-details">
                    <div className="contact-icon">
                      <img src="assets/images/icon14.png" alt="" />
                    </div>
                    <ul>
                      <li>3146 Koontz, California</li>
                      <li>Quze.24 Second floor</li>
                      <li>36 Street, Melbourne</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-btn-wrap">
              <h3>LET'S JOIN US FOR MORE UPDATE !!</h3>
              <a href="#" className="button-primary">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
