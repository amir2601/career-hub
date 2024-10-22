import { useEffect, useState } from "react";

const JobCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className="container mx-auto my-10 px-4 lg:px-0">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">Job Category List</h1>
                <p className="text-gray-400">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid md:grid-cols-4 mt-10 gap-6">

                {
                    categories.map(category => (
                        <div key={category.id} className="bg-secondary p-8 rounded-lg space-y-3">
                            <img src={category.logo} alt="" />
                            <h4 className="text-lg font-bold">{category.category_name}</h4>
                            <small>{category.availability}</small>
                        </div>
                    ))
                }

                {/* <div className="bg-secondary p-8 rounded-lg space-y-3">
                    <img src="/src/assets/icons/accounts.png" alt="" />
                    <h4 className="text-lg font-bold">Account & Finance</h4>
                    <small>300 Jobs Available</small>
                </div> */}
            </div>
        </div>
    );
};

export default JobCategory;