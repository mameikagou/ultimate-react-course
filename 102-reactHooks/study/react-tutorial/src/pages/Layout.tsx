import React, { useState, useContext,createContext } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import InformationManagement from "./InformationManagement";

import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

import { DoRequest } from "@/apis/http";

import mySearch from "./Search";

type MenuItem = Required<MenuProps>["items"][number];


// const token = 'your_token';

// axios.get(apiUrl, {
//   headers: {
//     'Authorization': `Bearer ${token}`,
//     'Content-Type': 'application/json', // 根据实际需要添加其他头部信息
//   },
// })


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}



const items: MenuItem[] = [
  // getItem("实验室信息查看", "1", <PieChartOutlined />, [
  //   getItem("实验室ID和编号", "t1", <UserOutlined />,),
  //   getItem("实验室名称", "t2", <UserOutlined />),
  //   getItem("实验室状态", "t3", <UserOutlined />),
  //   getItem("实验室相关描述", "t4", <UserOutlined />),
  // ]),
  getItem("硬件设备信息查看", "2", <DesktopOutlined />, [
    getItem("硬件类型查询", "x1", <UserOutlined />),
    getItem("硬件位置查询", "x2", <UserOutlined />),
    getItem("硬件列表查询", "x3", <UserOutlined />),
    getItem("硬件维护列表查询", "x4", <UserOutlined />),
  ]),
  getItem("软件设备信息查看", "3", <UserOutlined />, [
    getItem("ID和编号", "m1", <UserOutlined />),
    getItem("版本号", "m2", <UserOutlined />),
    getItem("相关描述", "m3", <UserOutlined />),
    getItem("位置", "m4", <UserOutlined />),
  ]),
  getItem("日志信息查看", "4"),
];

const handleItemClick = (key: string) => {
  // console.log(`Item clicked: ${key}`)
  const keyWords = {
    x1:()=>{func1()},
    x2:()=>{func1()},
    x3:()=>{func1()},
    x4:()=>{func1()}
  };
  keyWords[key] ? keyWords[key]() : console.log('无')
}
const func1 = () => {

}


const App: React.FC = () => {
  // react的函数组件类型
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(clickedItem) => handleItemClick(clickedItem.key)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <InformationManagement />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </>
  );
};

export default App;
