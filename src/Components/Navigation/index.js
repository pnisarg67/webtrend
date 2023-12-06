import {
    AppstoreOutlined,
    ScheduleOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/");

    useEffect(() => {
        const pathName = location.pathname;
        setSelectedKeys(pathName);
    }, [location.pathname]);

    const navigate = useNavigate();
    return (
        <div className="SideMenu">
            <Menu
                className="SideMenuVertical"
                theme="dark"
                mode="horizontal"
                onClick={(item) => {
                    //item.key
                    navigate(item.key);
                }}
                selectedKeys={[selectedKeys]}
                items={[
                    {
                        label: "Home",
                        key: "/",
                    },
                    {
                        label: "About",
                        key: "/about",
                    }, 
                    {
                        label: "Contact",
                        key: "/contact",
                       
                    },
                   
                ]}
            ></Menu>
        </div>
    );
}

export default SideMenu;
