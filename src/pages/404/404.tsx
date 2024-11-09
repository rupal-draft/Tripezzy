import React from "react";

const NotFound: React.FC = () => {
  return (
    <main id="content" className="site-main">
      <div
        className="no-content-section 404-page"
        style={{ backgroundImage: "url(assets/images/404-img.jpg)" }}
      >
        <div className="container">
          <div className="no-content-wrap">
            <span>404</span>
            <h1>Oops! That page can't be found</h1>
            <h4>
              It looks like nothing was found at this location. Maybe try one of
              the links below or a search?
            </h4>
            <div className="search-form-wrap">
              <form className="search-form">
                <input type="text" name="search" placeholder="Search..." />
                <button className="search-btn">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    </main>
  );
};

export default NotFound;
