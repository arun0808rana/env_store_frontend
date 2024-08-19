import React, { useState } from "react";
import { FolderOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import useStore from "../store";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  //   {
  //     label: "Navigation One",
  //     key: "mail",
  //     icon: <MailOutlined />,
  //   },
  //   {
  //     label: "Navigation Two",
  //     key: "app",
  //     icon: <AppstoreOutlined />,
  //     disabled: true,
  //   },
  //   {
  //     label: "Navigation Three - Submenu",
  //     key: "SubMenu",
  //     icon: <SettingOutlined />,
  //     children: [
  //       {
  //         type: "group",
  //         label: "Item 1",
  //         children: [
  //           { label: "Option 1", key: "setting:1" },
  //           { label: "Option 2", key: "setting:2" },
  //         ],
  //       },
  //       {
  //         type: "group",
  //         label: "Item 2",
  //         children: [
  //           { label: "Option 3", key: "setting:3" },
  //           { label: "Option 4", key: "setting:4" },
  //         ],
  //       },
  //     ],
  //   },
  {
    key: "register",
    label: <Link to="register">Register</Link>,
  },
  {
    key: "login",
    label: <Link to="login">Login</Link>,
  },
];

const authorizedItems: MenuItem[] = [
    {
      key: "home",
      icon: <FolderOutlined />,
      label: <Link to="/">Projects</Link>,
    },
    {
      key: "register",
      label: <Link to="register">Register</Link>,
    },
    {
      key: "login",
      label: <Link to="login">Login</Link>,
    },
  ];

const Navbar: React.FC = () => {
    const {isAuthorized} = useStore();

  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  if(isAuthorized){
    return  <Menu
    onClick={onClick}
    selectedKeys={[current]}
    mode="horizontal"
    items={authorizedItems}
    className="navbar-menu"
  /> 
  }else{
    return <Menu
    onClick={onClick}
    selectedKeys={[current]}
    mode="horizontal"
    items={items}
    className="navbar-menu"
  /> 
  }
};

export default Navbar;
