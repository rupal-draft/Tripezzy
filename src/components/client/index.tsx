import React from "react";

const Client: React.FC = () => {
  return (
    <div className="client-section">
      <div className="container">
        <div className="client-wrap client-slider secondary-bg">
          <div className="client-item">
            <figure>
              <img src="assets/images/logo1.png" alt="" />
            </figure>
          </div>
          <div className="client-item">
            <figure>
              <img src="assets/images/logo2.png" alt="" />
            </figure>
          </div>
          <div className="client-item">
            <figure>
              <img src="assets/images/logo3.png" alt="" />
            </figure>
          </div>
          <div className="client-item">
            <figure>
              <img src="assets/images/logo4.png" alt="" />
            </figure>
          </div>
          <div className="client-item">
            <figure>
              <img src="assets/images/logo5.png" alt="" />
            </figure>
          </div>
          <div className="client-item">
            <figure>
              <img src="assets/images/logo2.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;