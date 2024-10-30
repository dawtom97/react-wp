import { Image, Layout, Menu } from "antd";
import { useGetWpMenu } from "../../wp-services/wp-menu";

const { Header } = Layout;

const AppHeader = ({logo}) => {
  const { data: menu } = useGetWpMenu("primary");

  return (
    <Layout>
      <Header>
        <div
          className="logo"
          style={{ float: "left", color: "#fff", fontSize: "18px" }}
        >
          <Image
            width={80}
            src={logo}
          />
        </div>
        <Menu theme="dark" mode="horizontal" style={{ float: "right" }}>
          {menu?.items.map((item) => (
            <Menu.Item key={item.db_id}>{item.title}</Menu.Item>
          ))}
        </Menu>
      </Header>
    </Layout>
  );
};

export default AppHeader;
