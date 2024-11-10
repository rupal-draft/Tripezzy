import { useEffect } from "react";

export default function PreloadScripts() {
  useEffect(() => {
    const scripts = [
      "/assets/js/jquery.js",
      "https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js",
      "/assets/vendors/bootstrap/js/bootstrap.min.js",
      "/assets/vendors/jquery-ui/jquery-ui.min.js",
      "/assets/vendors/countdown-date-loop-counter/loopcounter.js",
      "/assets/js/jquery.counterup.js",
      "/assets/vendors/modal-video/jquery-modal-video.min.js",
      "/assets/vendors/masonry/masonry.pkgd.min.js",
      "/assets/vendors/lightbox/dist/js/lightbox.min.js",
      "/assets/vendors/slick/slick.min.js",
      "/assets/js/jquery.slicknav.js",
      "/assets/js/custom.min.js",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);

      script.onload = () => console.log(`${src} loaded successfully`);
      script.onerror = () => console.error(`Error loading ${src}`);
    });

    return () => {
      // Clean up scripts when component unmounts
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) document.body.removeChild(script);
      });
    };
  }, []);

  return null; // no JSX needed since we're only adding scripts
}
