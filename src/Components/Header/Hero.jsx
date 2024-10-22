const Hero = () => {
    return (
        <div className="bg-secondary">
            <div className="grid lg:grid-cols-2 pt-5 container mx-auto">
                <div className="flex items-center px-4 lg:px-0">
                    <div className="space-y-6">
                        <p className="text-4xl lg:text-7xl font-extrabold lg:leading-[90px]">One Step <br /> Closer To Your <br /> <span className="text-primary">Dream Job</span></p>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn btn-primary text-white px-6">Get Started</button>
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