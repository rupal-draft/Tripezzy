import { Helmet } from "react-helmet";

export default function PreloadScripts() {
  return (
    <Helmet>
      <script src="/assets/js/jquery.js" defer={false}></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"
        defer={false}
      ></script>
      <script
        src="/assets/vendors/bootstrap/js/bootstrap.min.js"
        defer={false}
      ></script>
      <script
        src="/assets/vendors/jquery-ui/jquery-ui.min.js"
        defer={false}
      ></script>
      <script
        src="/assets/vendors/countdown-date-loop-counter/loopcounter.js"
        defer={false}
      ></script>
      <script src="/assets/js/jquery.counterup.js" defer={false}></script>
      <script
        src="/assets/vendors/modal-video/jquery-modal-video.min.js"
        defer={false}
      ></script>
      <script
        src="/assets/vendors/masonry/masonry.pkgd.min.js"
        defer={false}
      ></script>
      <script
        src="/assets/vendors/lightbox/dist/js/lightbox.min.js"
        defer={false}
      ></script>
      <script src="/assets/vendors/slick/slick.min.js" defer={false}></script>
      <script src="/assets/js/jquery.slicknav.js" defer={false}></script>
      <script src="/assets/js/custom.min.js" defer={false}></script>
    </Helmet>
  );
}
