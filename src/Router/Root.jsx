import { Outlet } from "react-router-dom";
import Nav from "../Components/Header/Nav";


const Root = () => {
    return (
        <div className="w-[90%] mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;