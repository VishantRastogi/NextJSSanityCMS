import Link from "next/link";
import { Card } from "react-bootstrap";

const CardItem = ({
  authorName,
  authorAvatar,
  publishedDate,
  authorImage,
  blogTitle,
  blogSubtitle,
  slugLink,
}) => {
  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={authorAvatar}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {authorName}
            </Card.Title>
            <Card.Text className="card-date">{publishedDate}</Card.Text>
          </div>
        </Card.Header>
        <div className="view overlay">
          <Card.Img src={authorImage} alt="Author" />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{blogTitle}</Card.Title>
          <Card.Text>{blogSubtitle}</Card.Text>
        </Card.Body>
      </div>
      {slugLink && (
        <Link {...slugLink}>
          <a className="card-button">Read More</a>
        </Link>
      )}
    </Card>
  );
};

export default CardItem;
