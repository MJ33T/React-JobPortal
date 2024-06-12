import Hero from "../components/Hero.jsx";
import HomeCard from "../components/HomeCard.jsx";
import JobListings from "../components/JobListings.jsx";
import ViewAllJobs from "../components/ViewAllJobs.jsx";
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
