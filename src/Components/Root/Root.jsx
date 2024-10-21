import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/footer";

const Root = () => {
    return (
        <div className="bg-secondary">
            <div className="container mx-auto">
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;