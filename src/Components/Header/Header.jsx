import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : ""}>
                Statistics
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/applied'
                className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : ""}>
                Applied Jobs
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/blog'
                className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : ""}>
                Blog
            </NavLink>
        </li>
    </>

    return (
        <div className="py-5 bg-secondary">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/'>
                        <p className="text-xl md:text-3xl font-bold cursor-pointer text-primary">Career Hub</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="#" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-1 hover:ring-purple-500">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span className="relative text-white">View Details</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;