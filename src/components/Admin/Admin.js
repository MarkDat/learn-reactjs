import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState();
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed}></SideBar>
            </div>
            <div className="admin-content">
                <FaBars onClick={() => setCollapsed(!collapsed)}/>
                This is content
            </div>
        </div>
    )
}

export default Admin;