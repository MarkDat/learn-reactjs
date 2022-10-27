import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState();
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed}></SideBar>
            </div>
            <div className="admin-content">
                <div className="admin-header">
                <FaBars onClick={() => setCollapsed(!collapsed)}/>
                </div>
                <div className="admin-main">
                   <Outlet />
                </div>
               
            </div>
        </div>
    )
}

export default Admin;