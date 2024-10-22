const getStoredJobApplications = () => {
    const storedJobApplications = localStorage.getItem('jobApplications');

    if (storedJobApplications) {
        return JSON.parse(storedJobApplications);
    } else {
        return [];
    };
};

const saveJobApplication = (id) => {
    const storedJobApplications = getStoredJobApplications();
    const exists = storedJobApplications.find(jobId => jobId === id);

    if (!exists) {
        storedJobApplications.push(id);
        localStorage.setItem('jobApplications', JSON.stringify(storedJobApplications));
    };
};

export {saveJobApplication, getStoredJobApplications};