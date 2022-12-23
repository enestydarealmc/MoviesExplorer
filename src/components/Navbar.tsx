import Drawer from 'antd/es/drawer'
import React, { useState } from 'react'
import "../styles/navbar.css"
import { AlignRightOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const { Search } = Input;

export default function Navbar() {
    const [openDrawer, setOpenDrawer] = useState(false)
    function showDrawer() {
        setOpenDrawer(true)
    }
    function closeDrawer() {
        setOpenDrawer(false)
    }
    function onSearch(value) {

    }
    return (
        <>
            <nav className="menu-bar">
                <div className="logo-wrapper">
                    <span className="logo-movie">Movie</span>
                    <span className="logo-explorer">Explorer</span>
                </div>
                <Search placeholder="Search movie..." onSearch={onSearch} style={{ width: 300 }} />
                <div className="menu-icon-container">
                    <div className='menu-temp-expand'/>
                <AlignRightOutlined onClick={showDrawer} style={{ color: "white", fontSize: 25 }} />
                </div>
            </nav>
            <Drawer title="Please login" placement="right" onClose={closeDrawer} open={openDrawer}>
                <p>Login</p>
                <p>Upcoming</p>
            </Drawer>
        </>
    )
}
