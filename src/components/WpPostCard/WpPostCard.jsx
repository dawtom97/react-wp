import PropTypes from "prop-types";
import { Button, Card, Divider, Typography } from "antd";
import { dateConverter } from "../../utils/dateConverter";

const { Meta } = Card;
const { Text } = Typography;

const WpPostCard = ({ post }) => {
  return (
    <Card
      cover={
        <img
          height={270}
          style={{objectFit:'cover'}}
          alt={post.featuredMediaAlt}
          src={
            post.featuredMedia ??
            "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          }
        />
      }
    >
      <Meta
        title={post.title.rendered}
        description={
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        }
      />
      <Text italic>Data wpisu {dateConverter(post.date)}</Text>
      <Divider />
      <Button color="default" variant="filled">
        Czytaj dalej
      </Button>
    </Card>
  );
};

WpPostCard.propTypes = {
  post: PropTypes.object,
};

export default WpPostCard;
