import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { ImCoinDollar } from "react-icons/im";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div className="container mx-auto my-24 px-4 lg:px-0">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">Featured Jobs</h1>
                <p className="text-gray-400">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    jobs.map(job => (
                        <div key={job.id} className="border border-primary rounded-lg p-8 space-y-3">
                            <img src={job.img} alt="" />
                            <p className="font-bold">{job.position}</p>
                            <p>{job.company_name}</p>
                            <div className="flex gap-4">
                                <p className="border border-primary py-2 px-4">{job.job_type}</p>
                                <p className="border border-primary py-2 px-4">{job.job_time}</p>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex items-center gap-2">
                                    <IoLocationOutline></IoLocationOutline>
                                    <p>Location</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ImCoinDollar></ImCoinDollar>
                                    <p>Salary</p>
                                </div>
                            </div>
                            <button className="btn btn-primary text-white">
                                <Link to={`/job/${job.id}`}>View Details</Link>
                            </button>
                        </div>
                    ))
                }
            </div>

            {/* <div className="mt-5 text-center">
                <button className="btn btn-primary text-white px-6">See More</button>
            </div> */}
        </div>
    );
};

export default FeaturedJobs;