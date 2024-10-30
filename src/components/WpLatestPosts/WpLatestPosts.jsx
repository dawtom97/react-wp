import { Button, Col, Flex, Row, Skeleton, Typography } from "antd";
import { useGetWpPosts } from "../../wp-services/wp-posts";
import WpPostCard from "../WpPostCard/WpPostCard";

const { Title } = Typography;

const WpLatestPosts = () => {
  const postsLimit = import.meta.env.VITE_WP_HOMEPAGE_POSTS_LIMIT;
  const { data: posts, isLoading } = useGetWpPosts(postsLimit);

  return (
    <div>
      <Flex justify="space-between" align="center">
        <Title level="h2">Najnowsze wpisy</Title>
        <Button color="default" variant="solid">
          Zobacz wszystkie
        </Button>
      </Flex>

      {isLoading ? (
        <Row gutter={[16, 16]}>
          {[1, 2, 3, 4].map((x) => (
            <Col sm={24} md={12} key={x} lg={6}>
              <Skeleton />
            </Col>
          ))}
        </Row>
      ) : (
        <Row gutter={[16, 16]}>
          {posts?.map((post) => (
            <Col sm={24} md={12} key={post.id} lg={6}>
              <WpPostCard post={post} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default WpLatestPosts;
