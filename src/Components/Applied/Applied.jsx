import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../Utility/LocalStorage";
import { IoLocationOutline } from "react-icons/io5";
import { ImCoinDollar } from "react-icons/im";

const Applied = () => {
    const [applied, setApplied] = useState([]);
    const jobs = useLoaderData();

    useEffect(() => {
        const storedJobs = getStoredJobApplications();

        if (jobs.length > 0) {
            const appliedJobs = jobs.filter(job => storedJobs.includes(parseInt(job.id)));
            setApplied(appliedJobs);
        }

    }, []);

    console.log(applied);


    return (
        <div>
            <div className="p-32 text-center bg-secondary">
                <h1 className="text-4xl font-bold">Applied Jobs</h1>
            </div>

            {/* Job Details */}
            <div className="grid gap-3 my-20 container mx-auto px-4 md:px-0">
                {
                    applied.map(job => (
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
                                            <p>Location</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ImCoinDollar></ImCoinDollar>
                                            <p>Salary</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary text-white">
                                <Link to={`/job/${job.id}`}>View Details</Link>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Applied;