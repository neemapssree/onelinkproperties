import Overview from "./components/layout/sections/Overview";
import Banner from "./components/layout/sections/Banner";
import Menu from "./components/layout/sections/Menu";
import ProjectStats from "./components/layout/sections/ProjectStats";
import InvestmentHighlights from "./components/layout/sections/InvestmentHighlights";
import PropTypes from "./components/layout/sections/PropTypes";
import Amenities from "./components/layout/sections/Amenities";

export default function Home() {
  return (
    <>
      <Menu />
      <Banner />
      <ProjectStats />
      <Overview />
      <InvestmentHighlights />
      <PropTypes />
      <Amenities />
    </>
    
  );
}
