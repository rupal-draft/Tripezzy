"use client";

import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "../../utils/constants";

interface BlogPost {
  image: string;
  title: string;
  author: string;
  date: string;
  comments: string;
}

const BlogPostCard: React.FC<BlogPost> = ({
  image,
  title,
  author,
  date,
  comments,
}) => (
  <motion.div
    className="col-md-6 col-lg-4"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <motion.article
      className="post"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <figure className="feature-image">
        <a href="#">
          <img src={image} alt={title} />
        </a>
      </figure>
      <div className="entry-content">
        <h3>
          <a href="#">{title}</a>
        </h3>
        <div className="entry-meta">
          <span className="byline">
            <a href="#">{author}</a>
          </span>
          <span className="posted-on">
            <a href="#">{date}</a>
          </span>
          <span className="comments-link">
            <a href="#">{comments}</a>
          </span>
        </div>
      </div>
    </motion.article>
  </motion.div>
);

const BlogSection: React.FC = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <motion.h5
                className="dash-style"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                FROM OUR BLOG
              </motion.h5>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                OUR RECENT POSTS
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Mollit voluptatem perspiciatis convallis elementum corporis quo
                veritatis aliquid blandit, blandit torquent, odit placeat.
                Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae
                placeat.
              </motion.p>
            </div>
          </div>
        </motion.div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
