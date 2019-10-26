import React from "react";
import {Layout,Menu} from 'antd';
import { Link } from 'react-router-dom'
const {Header}=Layout

// component for the heading
export default function Heading(){
    
    const flexContainer={
        display: "flex",flexWrap: "wrap",justifyContent: "space-between"
    };

    return (
        <Header style={flexContainer}>
            <div className="logo">Enye Form</div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1"><Link to="/">Form</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/table">Table</Link></Menu.Item>
            </Menu>
        </Header>
    );

}


