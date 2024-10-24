const Hero = () => {
    return (
        <div className="bg-secondary">
            <div className="grid lg:grid-cols-2 pt-5 container mx-auto">
                <div className="flex items-center px-4 lg:px-0">
                    <div className="space-y-6">
                        <p className="text-4xl lg:text-7xl font-extrabold lg:leading-[90px]">One Step <br /> Closer To Your <br /> <span className="text-primary">Dream Job</span></p>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <a href="#" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-1 hover:ring-purple-500">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                            <span className="relative text-white">View Details</span>
                        </a>
                    </div>
                </div>

                <div>
                    <img src="/src/assets/images/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;