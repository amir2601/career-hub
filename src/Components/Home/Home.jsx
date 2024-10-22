import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Hero from "../Header/Hero";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;