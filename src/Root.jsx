import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;