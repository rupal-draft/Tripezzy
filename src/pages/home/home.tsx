import React from "react";
import Hero from "../../components/hero/hero";
import TripSearch from "../../components/trip search/search";
import DestinationSection from "../../components/distination section";
import PackageSection from "../../components/package section";
import Callback from "../../components/callback/callback";
import Activity from "../../components/activity/activity";
import Special from "../../components/special/special";
import Best from "../../components/best/best";
import Client from "../../components/client";
import Suscribe from "../../components/suscribe/suscribe";
import BlogSection from "../../components/blog section";
import Testimonial from "../../components/testimonial/testimonial";
import Contact from "../../components/contact/contact";

const Home: React.FC = () => {
  return (
    <main id="content" className="site-main">
      <Hero />
      <TripSearch />
      <DestinationSection />
      <PackageSection />
      <Callback />
      <Activity />
      <Special />
      <Best />
      <Client />
      <Suscribe />
      <BlogSection />
      <Testimonial />
      <Contact />
    </main>
  );
};

export default Home;
