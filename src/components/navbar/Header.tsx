import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { DashboardOutlined } from "@ant-design/icons";
const items: MenuProps["items"] = [
  {
    label: "Article",
    key: "article",
    icon: <DashboardOutlined />,
  },
];

export const Headers = () => {
  return (
    <Layout.Header
      className="menuBar"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <div className="logo">
        <a href="">
          <img src="logo_with_name.png" alt="logo" height={"24px"} />
        </a>
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["article"]}
        items={items}
      />
    </Layout.Header>
  );
};
