import React from "react";
import { motion } from "framer-motion";
import Banner from "../../components/banner";
import { packages } from "../../utils/constants";
import Contact from "../../components/contact/contact";

interface Package {
  id: number;
  image: string;
  discount: number;
  destination: string;
  title: string;
  originalPrice: number;
  discountedPrice: number;
}

const PackageItem: React.FC<{ pack: Package }> = ({ pack }) => (
  <motion.div
    className="col-md-6 col-lg-4"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="special-item">
      <figure className="special-img">
        <img src={pack.image} alt={pack.title} />
      </figure>
      <motion.div className="badge-dis" whileHover={{ scale: 1.1, rotate: 5 }}>
        <span>
          <strong>{pack.discount}%</strong>
          off
        </span>
      </motion.div>
      <div className="special-content">
        <div className="meta-cat">
          <a href="#">{pack.destination}</a>
        </div>
        <h3>
          <a href="#">{pack.title}</a>
        </h3>
        <div className="package-price">
          Price:
          <del>${pack.originalPrice}</del>
          <ins>${pack.discountedPrice}</ins>
        </div>
      </div>
    </div>
  </motion.div>
);

const PackageOffers: React.FC = () => {
  const Packages: Package[] = packages;
  return (
    <main id="content" className="site-main">
      <Banner heading="Package Offers" />
      <section className="package-offer-wrap">
        <div className="special-section">
          <div className="container">
            <div className="special-inner">
              <div className="row">
                {Packages.map((pack) => (
                  <PackageItem key={pack.id} pack={pack} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </section>
    </main>
  );
};

export default PackageOffers;
