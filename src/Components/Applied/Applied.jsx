import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../Utility/LocalStorage";
import { IoLocationOutline } from "react-icons/io5";
import { ImCoinDollar } from "react-icons/im";

const Applied = () => {
    const jobs = useLoaderData();

    const [applied, setApplied] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    useEffect(() => {
        const storedJobs = getStoredJobApplications();

        if (jobs.length > 0) {
            const appliedJobs = jobs.filter(job => storedJobs.includes(parseInt(job.id)));
            setApplied(appliedJobs);
            setDisplayJobs(appliedJobs);
        }

    }, []);

    const handleFilter = (filter) => {
        if (filter === 'All') {
            setDisplayJobs(applied);
        } else if (filter === 'Remote') {
            const remoteJobs = applied.filter(job => job.job_type === 'Remote');
            setDisplayJobs(remoteJobs);
        } else if (filter === 'Onsite') {
            const onsiteJobs = applied.filter(job => job.job_type === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    };

    // console.log(applied);
    console.log(displayJobs);


    return (
        <div>
            <div className="p-32 text-center bg-secondary">
                <h1 className="text-4xl font-bold">Applied Jobs</h1>
            </div>

            <div className="flex gap-4 mt-5">
                <button onClick={() => handleFilter('All')} className="btn btn-sm btn-outline hover:text-primary">All</button>
                <button onClick={() => handleFilter('Remote')} className="btn btn-sm btn-outline hover:text-primary">Remote</button>
                <button onClick={() => handleFilter('Onsite')} className="btn btn-sm btn-outline hover:text-primary">On-site</button>
            </div>

            {/* Job Details */}
            <div className="grid gap-3 my-20 container mx-auto px-4 md:px-0">
                {
                    displayJobs.map(job => (
                        <div key={job.id} className="border border-primary rounded-lg p-8 space-y-3 flex flex-col md:flex-row justify-between items-center">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex justify-center items-center w-44 p-10 bg-slate-100">
                                    <img src={job.img} alt="" />
                                </div>
                                <div className="space-y-4">
                                    <p className="font-bold">{job.position}</p>
                                    <p>{job.company_name}</p>
                                    <div className="flex gap-4">
                                        <p className="border border-primary py-2 px-4">{job.job_type}</p>
                                        <p className="border border-primary py-2 px-4">{job.job_time}</p>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-2">
                                            <IoLocationOutline></IoLocationOutline>
                                            <p>{job.job_location}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ImCoinDollar></ImCoinDollar>
                                            <p>{job.salary} (Per Month)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <button className="btn btn-primary text-white">
                                <Link to={`/job/${job.id}`}>View Details</Link>
                            </button> */}
                            <Link to={`/job/${job.id}`} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-1 hover:ring-purple-500">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                <span className="relative text-white">View Details</span>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Applied;