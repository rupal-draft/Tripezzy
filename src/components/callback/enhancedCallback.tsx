import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { counterItems } from "../../utils/constants";

export function TravelCallbackSection() {
  return (
    <div
      className="fullwidth-callback"
      style={{ backgroundImage: "url('/assets/images/img26.jpg')" }}
    >
      <div className="container">
        <div className="section-heading section-heading-white text-center">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h5 className="dash-style">CALLBACK FOR MORE</h5>
              <h2>GO TRAVEL.DISCOVER. REMEMBER US!!</h2>
              <p>
                Mollit voluptatem perspiciatis convallis elementum corporis quo
                veritatis aliquid blandit, blandit torquent, odit placeat.
                Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae
                placeat.
              </p>
            </div>
          </div>
        </div>

        <div className="callback-counter-wrap">
          {counterItems.map((item, index) => (
            <CounterItem key={index} {...item} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface CounterItemProps {
  icon: string;
  count: number;
  suffix: string;
  text: string;
  delay: number;
}

function CounterItem({ icon, count, suffix, text, delay }: CounterItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="counter-item">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        className="counter-item-inner"
      >
        <div className="counter-icon">
          <img src={icon} alt="" />
        </div>
        <div className="counter-content">
          <motion.span
            className="counter-no"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: delay + 0.3 }}
          >
            <span className="counter">
              <CountUp end={count} duration={2.5} />
            </span>
            {suffix}
          </motion.span>
          <span className="counter-text">{text}</span>
        </div>
      </motion.div>
    </div>
  );
}

function CountUp({ end, duration }: { end: number; duration: number }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.min(Math.floor(end * progress), end));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <React.Fragment>{count}</React.Fragment>;
}
