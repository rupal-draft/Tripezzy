import React from "react";
import { motion } from "framer-motion";
import { Activities, Packages } from "../../utils/constants";
import Activity from "../../components/activity/activity";
import PackageSection from "../../components/package section";
import Banner from "../../components/banner";

interface ActivityProps {
  icon: string;
  title: string;
  destinations: number;
}
const packages = Packages;

const activities: ActivityProps[] = Activities;

const TourPackage: React.FC = () => {
  return (
    <main id="content" className="site-main">
      <Banner heading="Tour Packages" />

      <PackageSection packages={packages} />

      <Activity activities={activities} />
    </main>
  );
};

export default TourPackage;
