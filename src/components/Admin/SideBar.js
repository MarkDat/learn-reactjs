import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaGithub, FaRegLaughWink } from 'react-icons/fa';
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import sidebarBg from '../../assets/bg2.jpg';
import "./Admin.scss"
import "./SideBar.scss"
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    const { image, collapsed, rtl, toggled, handleToggleSidebar } = props;
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <DiReact size='3em' color='00bfff'></DiReact>
                        <span>Admin Nek</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem icon={<MdDashboard />} >
                           Dashboard
                           <Link to='/admins' />
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            icon={<FaGem />}
                            title="Features"
                        >
                            <MenuItem> Manager User  <Link to='/admins/manage-users' /></MenuItem>
                            <MenuItem> Manager Quiz</MenuItem>
                            <MenuItem> Manager Questions</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                Dat Luong
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    );
}

export default SideBar;
