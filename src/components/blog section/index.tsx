import React from "react";

const BlogSection: React.FC = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-heading text-center">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h5 className="dash-style">FROM OUR BLOG</h5>
              <h2>OUR RECENT POSTS</h2>
              <p>
                Mollit voluptatem perspiciatis convallis elementum corporis quo
                veritatis aliquid blandit, blandit torquent, odit placeat.
                Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae
                placeat.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <article className="post">
              <figure className="feature-image">
                <a href="#">
                  <img src="assets/images/img17.jpg" alt="" />
                </a>
              </figure>
              <div className="entry-content">
                <h3>
                  <a href="#">Life is a beautiful journey not a destination</a>
                </h3>
                <div className="entry-meta">
                  <span className="byline">
                    <a href="#">Demoteam</a>
                  </span>
                  <span className="posted-on">
                    <a href="#">August 17, 2021</a>
                  </span>
                  <span className="comments-link">
                    <a href="#">No Comments</a>
                  </span>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-4">
            <article className="post">
              <figure className="feature-image">
                <a href="#">
                  <img src="assets/images/img18.jpg" alt="" />
                </a>
              </figure>
              <div className="entry-content">
                <h3>
                  <a href="#">Take only memories, leave only footprints</a>
                </h3>
                <div className="entry-meta">
                  <span className="byline">
                    <a href="#">Demoteam</a>
                  </span>
                  <span className="posted-on">
                    <a href="#">August 17, 2021</a>
                  </span>
                  <span className="comments-link">
                    <a href="#">No Comments</a>
                  </span>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-4">
            <article className="post">
              <figure className="feature-image">
                <a href="#">
                  <img src="assets/images/img19.jpg" alt="" />
                </a>
              </figure>
              <div className="entry-content">
                <h3>
                  <a href="#">Journeys are best measured in new friends</a>
                </h3>
                <div className="entry-meta">
                  <span className="byline">
                    <a href="#">Demoteam</a>
                  </span>
                  <span className="posted-on">
                    <a href="#">August 17, 2021</a>
                  </span>
                  <span className="comments-link">
                    <a href="#">No Comments</a>
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
