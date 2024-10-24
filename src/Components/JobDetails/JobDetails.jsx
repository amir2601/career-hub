import { useLoaderData, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
    const jobId = useParams();
    const jobs = useLoaderData();

    let job;

    if (jobs) {
        job = jobs.find(job => job.id == parseInt(jobId.id));
    }

    const handleApplyJob = () => {
        saveJobApplication(parseInt(jobId.id))
        toast.success('Applied Successfully');
    }

    return (
        <div>
            <div className="p-32 text-center bg-secondary">
                <h1 className="text-4xl font-bold">Job Details</h1>
            </div>

            {/* Job Details */}
            <div className="grid md:grid-cols-3 gap-3 my-20 container mx-auto px-4 md:px-0">
                <div className="md:col-span-2 space-y-5">
                    {/* description */}
                    <p>
                        <span className="font-bold">Job Description:</span> {job.job_des}
                    </p>

                    {/* responsibility */}
                    <p>
                        <span className="font-bold">Job Responsibility:</span> {job.job_res}
                    </p>
                    {/* educational req */}
                    <p className="font-bold">Educational Requirements:</p>
                    <p>{job.edu_req}</p>

                    {/* exp */}
                    <p className="font-bold">Experiences:</p>
                    <p>{job.exp}</p>

                </div>
                <div className="md:col-span-1 space-y-6">
                    <div className="space-y-4 bg-sky-100 p-6 rounded-xl">
                        <p className="font-bold">Job Details</p>
                        <hr className="bg-black" />
                        <p>
                            <span className="font-bold">Salary :</span> {job.salary} (Per Month)
                        </p>
                        <p>
                        <span className="font-bold">Job Title :</span> {job.position}
                        </p>
                        <p className="font-bold">Contact Information</p>
                        <hr className="bg-black" />
                        <p><span className="font-bold">Phone :</span> {job.phone}</p>
                        <p><span className="font-bold">Email :</span> {job.email}</p>
                        <p><span className="font-bold">Address :</span> {job.job_location}</p>
                    </div>
                    {/* <button onClick={() => handleApplyJob()} className="btn btn-primary text-white w-full">Apply Now</button> */}

                    <button onClick={() => handleApplyJob()} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-lg shadow-xl w-full group hover:ring-1 hover:ring-purple-500">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-180 ease"></span>
                        <span className="relative text-white">Apply Now</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;