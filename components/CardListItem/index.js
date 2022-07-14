import { Card } from "react-bootstrap";

const CardListItem = ({ avatar, author, publishedDate, title, subtitle }) => {
  return (
    <Card className={`fj-card fj-card-list`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={avatar}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">{author}</Card.Title>
            <Card.Text className="card-date">{publishedDate}</Card.Text>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      <a href="#" className="card-button">
        Read More
      </a>
    </Card>
  );
};

export default CardListItem;
