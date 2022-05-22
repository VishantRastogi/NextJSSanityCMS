import { Row, Col, Media, Image } from "react-bootstrap";

const AuthorIntro = () => {
  return (
    <Row>
      <Col md="8">
        <Media className="mb-4 admin-intro">
          <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHLhGqn5kA4cw/profile-displayphoto-shrink_200_200/0/1516643707150?e=1657152000&v=beta&t=nlX7oe7qvfv6qeMcUr5ao9R0ikho8clBE_AGp8oOu1o"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
            <p className="welcome-text">
              My name is Vishant Rastogi and I am an experienced software
              engineer and this is my blog page with NextJS & Sanity.
            </p>
          </Media.Body>
        </Media>
      </Col>
    </Row>
  );
};

export default AuthorIntro;
