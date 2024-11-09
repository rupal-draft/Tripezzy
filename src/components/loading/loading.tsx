import React from 'react';

const Loader: React.FC = () => {
  return (
    <div id="siteLoader" className="site-loader">
      <div className="preloader-content">
        <img src="assets/images/loader1.gif" alt="Loading..." />
      </div>
    </div>
  );
};

export default Loader;
