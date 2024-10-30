import { Layout, Menu } from "antd";
import { useGetWpMenu } from "../../wp-services/wp-menu";

const { Footer } = Layout;

const AppFooter = () => {
  const { data: menu } = useGetWpMenu("footer");

  return (
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "#001529",
        color: "#fff",
        padding: "10px 50px",
      }}
    >
      <div>© 2024 MyWebsite. All Rights Reserved.</div>
      <Menu theme="dark" mode="horizontal" style={{ float: 'right' }}>
        {menu?.items.map((item) => (
          <Menu.Item key={item.db_id}>{item.title}</Menu.Item>
        ))}
      </Menu>
    </Footer>
  );
};

export default AppFooter;
